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
import type { Movie } from '@/store/store-types';

const menuItemSx = {
  '&:hover': {
    bgcolor: '#f65261',
    color: '#FFFFFF',
  },
};

type MovieTileProps = {
  movie: Movie;
};

export default function MovieTile({ movie }: MovieTileProps) {
  const role = useAppSelector((state) => state.user.role);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [imgSrc, setImgSrc] = useState(() => {
    if (!movie.poster_path) return '/movie.jpg';

    if (movie.poster_path.startsWith('http')) {
      return `https://images.weserv.nl/?url=${encodeURIComponent(movie.poster_path)}`;
    }

    return `https://images.weserv.nl/?url=${encodeURIComponent(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)}`;
  });

  const handleError = () => {
    setImgSrc('/movie.jpg');
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
          image={imgSrc}
          alt={'title'}
          sx={{ objectFit: 'cover' }}
          onError={handleError}
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
          <Typography variant="body2" sx={{ color: '#999999' }} component="div">
            {movie.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#999999', border: '1px solid #999999', px: 1, py: 0.5 }}
          >
            {movie.release_date}
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ color: '#999999' }}>
          {movie.genres}
        </Typography>
      </CardContent>
    </Card>
  );
}
