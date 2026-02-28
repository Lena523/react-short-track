import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useAuthInitialization } from '@/hooks/useAuthInitialization';

export default function UserButton() {
  const { role } = useAuthInitialization();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (role === 'unknown') {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box sx={{ position: 'relative', zIndex: 1300 }}>
        <Button
          ref={anchorRef}
          aria-describedby="logout-popper"
          type="button"
          variant="circledButton"
          onClick={handleClick}
        >
          J
        </Button>
        <Popper
          id="logout-popper"
          open={open}
          // eslint-disable-next-line react-hooks/refs
          anchorEl={anchorRef.current}
          placement="bottom-end"
          sx={{ zIndex: 1400 }}
        >
          <Box
            sx={{
              bgcolor: '#232323',
              borderRadius: '4px',
              mt: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ p: 2 }}>
              JOHN
            </Typography>
            <Button
              fullWidth
              variant="redButton"
              onClick={handleClose}
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              LOGOUT
            </Button>
          </Box>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
}
