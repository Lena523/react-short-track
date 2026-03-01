import type { Movie } from '@/store/store-types';

export type MovieTileProps = {
  movie: Omit<Movie, 'overview'>;
};

export const menuItemSx = {
  '&:hover': {
    bgcolor: '#f65261',
    color: '#FFFFFF',
  },
};

export const textFieldSx = {
  '& .MuiInputLabel-root': {
    color: '#F65261',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': { borderColor: '#F65261' },
  },
};

export interface AddMovieFormInputs {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: string[];
  runtime: number;
  overview: string;
}
