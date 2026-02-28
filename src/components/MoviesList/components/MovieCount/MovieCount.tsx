import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/store/hooks';
import { selectMovies } from '@/store/slices/movieSlice';

export default function MovieCount() {
  const movies = useAppSelector(selectMovies);

  const listLength =
    movies.length === 1 ? `${movies.length} movie found` : `${movies.length} movies found`;

  return <Typography variant="subtitle1">{listLength}</Typography>;
}
