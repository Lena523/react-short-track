import { useAppSelector } from '@/store/hooks';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { menuItemSx } from '@/components/types/movies-types';
import { useNavigate } from 'react-router';

type AdminMovieButtonProps = {
  movieId: number;
};

export default function AdminMovieButton({ movieId }: AdminMovieButtonProps) {
  const role = useAppSelector((state) => state.user.role);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (role !== 'admin') {
    return null;
  }

  return (
    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
      <IconButton
        aria-label="settings"
        onClick={handleClick}
        sx={{ color: '#FFFFFF', bgcolor: 'rgba(0,0,0,0.5)' }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
        <MenuItem onClick={() => navigate(`/${movieId}/edit-movie`)} sx={menuItemSx}>
          Edit
        </MenuItem>
        <MenuItem sx={menuItemSx}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}
