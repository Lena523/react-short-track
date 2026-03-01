import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Movie, MoviesState } from '@store/store-types';

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
    setMoviesData: (state, action: PayloadAction<Movie[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.data.push(action.payload);
    },
    updateMovie: (state, action: PayloadAction<Movie>) => {
      const index = state.data.findIndex((movie) => movie.id === action.payload.id);

      if (index) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  setMoviesData,
  addMovie,
  updateMovie,
} = movieSlice.actions;
export const selectMovies = (state: { movie: MoviesState }) => state.movie.data;
export const selectMoviesLoading = (state: { movie: MoviesState }) => state.movie.isLoading;
export const selectMoviesError = (state: { movie: MoviesState }) => state.movie.error;

export default movieSlice.reducer;
