import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Movie } from '@store/store-types';

interface MoviesState {
  data: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  data: [],
  isLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMoviesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getMoviesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getMoviesFailure, getMoviesStart, getMoviesSuccess } = movieSlice.actions;
export const selectMovies = (state: { movie: MoviesState }) => state.movie.data;
export const selectMoviesLoading = (state: { movie: MoviesState }) => state.movie.isLoading;
export const selectMoviesError = (state: { movie: MoviesState }) => state.movie.error;

export default movieSlice.reducer;
