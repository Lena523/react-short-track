export enum URL {
  LOGIN = 'https://dummyjson.com/auth/login',
  GETUSER = 'https://dummyjson.com/auth/me',
}

export interface LoginProps {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}
