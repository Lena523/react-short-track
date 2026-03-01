import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@store/store';
import type { Movie } from '@store/store-types';
import { sliceApi } from '@/services/api/apiSlice';

const EMPTY_ARRAY: Movie[] = [];

export const selectAllMovies = (state: RootState) => {
  const result = sliceApi.endpoints.getMovies.select(null)(state);

  return result.data?.data ?? EMPTY_ARRAY;
};

export const selectMoviesStatus = createSelector(
  [(state: RootState) => sliceApi.endpoints.getMovies.select(null)(state)],
  (result) => ({
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
    isSuccess: result.isSuccess,
  }),
);

export const selectFilteredMovies = createSelector(
  [selectAllMovies, (_: RootState, searchParams: URLSearchParams) => searchParams],
  (movies, searchParams) => {
    const search = searchParams.get('search')?.toLowerCase() || '';
    const genreParam = searchParams.get('genre') || 'ALL';

    return movies.filter((movie: Movie) => {
      if (genreParam !== 'ALL') {
        const movieGenres = movie.genres?.map((genre) => genre.toUpperCase()) || [];

        if (!movieGenres.includes(genreParam)) {
          return false;
        }
      }

      if (search) {
        return (
          movie.title.toLowerCase().includes(search) ||
          movie.overview?.toLowerCase().includes(search)
        );
      }

      return true;
    });
  },
);
