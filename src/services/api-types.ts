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
