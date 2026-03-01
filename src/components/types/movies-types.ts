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

export const textFieldSearchSx = {
  '& .MuiOutlinedInput-root': {
    background: 'linear-gradient(135deg, rgba(70, 70, 70, 0.95) 0%, rgba(40, 40, 40, 0.98) 100%)',
    borderRadius: '4px',
    backdropFilter: 'blur(2px)',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: '#F65261',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F65261',
    },
  },
  '& .MuiInputBase-input': {
    padding: '16px 22px',
    fontSize: '1.2rem',
    fontWeight: 400,
    letterSpacing: '0.3px',
    color: '#ffffff',
    '&::placeholder': {
      color: 'rgba(200, 200, 200, 0.7)',
      opacity: 1,
      fontWeight: 300,
      fontSize: '1.1rem',
    },
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
