export interface UserState {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'unknown';
  isLoading: boolean;
  isInitialized: boolean;
}

export interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  genres: string[];
  overview: string;
  id: number;
}

export interface MoviesState {
  data: Movie[];
  isLoading: boolean;
  error: string | null;
}
