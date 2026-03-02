import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { useGetMovieByIdQuery } from '@services/api/apiSlice';
import Spinner from '@/components/common/Spinner/Spinner';
import checkImageLoading from '@/utils/checkImageLoading';
import { useNavigate } from 'react-router';
import { useDeleteMovieByIdMutation } from '@services/api/apiSlice';

export default function MovieDetails() {
  const { movieId } = useParams();
  const { data: movieData, isLoading } = useGetMovieByIdQuery(Number(movieId));
  const movie = movieData?.data;
  const { imgUrl } = checkImageLoading(movie?.poster_path);
  const navigate = useNavigate();
  const [deleteMovie, { isLoading: isDeleteLoading, isSuccess }] = useDeleteMovieByIdMutation();

  if (!movie) return null;

  if (isLoading || isDeleteLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    navigate('/');
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button onClick={() => navigate('/')} variant="transparentButton">
            GO BACK
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, mb: 8 }}>
        <Box
          component="img"
          src={imgUrl}
          alt={movie.title}
          sx={{
            width: '33%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />

        <Box sx={{ width: '67%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6">{movie.title}</Typography>
            <Button variant="circledButton">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Typography variant="subtitle2">{movie.genres?.join(', ')}</Typography>
            <Typography variant="subtitle2">
              {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min` : ''}
            </Typography>
          </Box>

          <Typography variant="subtitle2" sx={{ mb: 4 }}>
            {movie.overview}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={() => deleteMovie(Number(movieId))} variant="transparentButton">
              DELETE
            </Button>
            <Button onClick={() => navigate(`/${movieId}/edit-movie`)} variant="transparentButton">
              EDIT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
