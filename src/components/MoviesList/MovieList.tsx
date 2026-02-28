import MovieTile from '@components/MoviesList/components/MovieTile/MovieTile';
import Grid from '@mui/material/Grid';
import { useGetMoviesQuery } from '@/services/api/apiSlice';
import Spinner from '@components/common/Spinner/Spinner';
import type { Movie } from '@/store/store-types';
import { useMemo } from 'react';

export default function MovieList() {
  const { data, isLoading } = useGetMoviesQuery(null);

  const movieTiles: Movie[] = useMemo(
    () =>
      data?.data.map((movie) => ({
        id: movie.id,
        title: movie.title,
        genres: movie.genres,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      })) ?? [],
    [data],
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid container spacing={3}>
      {movieTiles.map((movie) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={movie.id}>
          <MovieTile movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
