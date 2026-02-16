export interface LoginUserResponseProps {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
    token: string;
  };
  message: string;
}

export interface RegisterUserResponseProps {
  message: string;
}

export const URLPATH = 'http://localhost:4000/';
