import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/store/hooks';
import { useSearchParams } from 'react-router';
import { selectFilteredMovies } from '@/store/selectors/movieSelectors';

export default function MovieCount() {
  const [searchParams] = useSearchParams();
  const filteredMovies = useAppSelector((state) => selectFilteredMovies(state, searchParams));

  const listLength =
    filteredMovies.length === 1
      ? `${filteredMovies.length} movie found`
      : `${filteredMovies?.length} movies found`;

  return <Typography variant="subtitle1">{listLength}</Typography>;
}
