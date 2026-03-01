import MovieTile from '@components/MoviesList/components/MovieTile/MovieTile';
import Grid from '@mui/material/Grid';
import { useGetMoviesQuery } from '@/services/api/apiSlice';
import Spinner from '@components/common/Spinner/Spinner';
import { useSearchParams } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { selectFilteredMovies } from '@/store/selectors/movieSelectors';

export default function MovieList() {
  const { isLoading } = useGetMoviesQuery(null);
  const [searchParams] = useSearchParams();
  const filteredMovies = useAppSelector((state) => selectFilteredMovies(state, searchParams));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid container spacing={3}>
      {filteredMovies.map((movie) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
          <MovieTile movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
