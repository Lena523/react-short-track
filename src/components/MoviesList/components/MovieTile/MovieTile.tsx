import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminMovieButton from '@components/MoviesList/components/MovieTile/components/AdminMovieButton';
import type { MovieTileProps } from '@/components/types/movies-types';
import { useNavigate } from 'react-router';
import checkImageLoading from '@/utils/checkImageLoading';

export default function MovieTile({ movie }: MovieTileProps) {
  const navigate = useNavigate();
  const { imgUrl } = checkImageLoading(movie.poster_path);

  console.log(imgUrl);

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
          image={imgUrl}
          alt={'title'}
          sx={{ objectFit: 'cover' }}
          onClick={() => navigate(`/${movie.id}`)}
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
