import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/store/hooks';
import { selectAllMovies } from '@/store/selectors/movieSelectors';

export default function MovieCount() {
  const data = useAppSelector(selectAllMovies);

  const listLength =
    data.length === 1 ? `${data.length} movie found` : `${data?.length} movies found`;

  return <Typography variant="subtitle1">{listLength}</Typography>;
}
