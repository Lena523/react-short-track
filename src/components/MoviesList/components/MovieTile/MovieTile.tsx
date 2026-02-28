import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';

const menuItemSx = {
  '&:hover': {
    bgcolor: '#f65261',
    color: '#FFFFFF',
  },
};

export default function MovieTile() {
  const role = useAppSelector((state) => state.user.role);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        maxWidth: 280,
        bgcolor: '#232323',
        color: '#FFFFFF',
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="400"
          image={'/movie.jpg'}
          alt={'title'}
          sx={{ objectFit: 'cover' }}
        />

        {role === 'admin' && (
          <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
            <IconButton
              aria-label="settings"
              onClick={handleClick}
              sx={{ color: '#FFFFFF', bgcolor: 'rgba(0,0,0,0.5)' }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
              <MenuItem sx={menuItemSx}>Edit</MenuItem>
              <MenuItem sx={menuItemSx}>Delete</MenuItem>
            </Menu>
          </Box>
        )}
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="subtitle1" sx={{ color: '#999999' }} component="div">
            title
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#999999', border: '1px solid #999999', px: 1, py: 0.5 }}
          >
            2025
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#999999' }}>
          genres
        </Typography>
      </CardContent>
    </Card>
  );
}
