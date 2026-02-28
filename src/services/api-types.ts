export interface LoginUserResponseProps {
  data: {
    id: number;
    name: string;
    email: string;
    role: 'user' | 'admin' | 'unknown';
    token: string;
  };
  message: string;
}

export interface RegisterUserResponseProps {
  message: string;
}

export const URLPATH = 'http://localhost:4000/';

export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = LoginUser & {
  name: string;
};

export type GetUserProps = {
  token: string;
};

export interface MovieData {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
  id: number;
}

export interface ApiMoviesResponse {
  data: MovieData[];
  total: number;
  offset: number;
  limit: number;
}
