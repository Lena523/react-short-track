import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AdminMovieButton from '@components/MoviesList/components/MovieTile/components/AdminMovieButton';
import type { MovieTileProps } from '@/components/types/movies-types';
import { useNavigate } from 'react-router';

export default function MovieTile({ movie }: MovieTileProps) {
  const navigate = useNavigate();
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
        cursor: 'pointer',
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
          onClick={() => navigate(movie.id)}
        />
      </Box>
      <AdminMovieButton movieId={movie.id} />
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#999999',
              maxWidth: '140px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
            component="div"
          >
            {movie.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#999999',
              border: '1px solid #999999',
              minWidth: '100px',
              textAlign: 'center',
              fontSize: '12px',
            }}
          >
            {movie.release_date}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#999999',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: '200px',
          }}
        >
          {movie.genres?.join(', ') || 'No genres'}
        </Typography>
      </CardContent>
    </Card>
  );
}
