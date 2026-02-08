export enum URL {
  LOGIN = 'https://dummyjson.com/auth/login',
  COURSE = 'https://69873d4a8bacd1d773ece120.mockapi.io/api/courses',
  GETAUTHORS = 'https://69873d4a8bacd1d773ece120.mockapi.io/api/authors',
  IDCOURSE = 'https://69873d4a8bacd1d773ece120.mockapi.io/api/courses/',
  IDAUTHORS = 'https://69873d4a8bacd1d773ece120.mockapi.io/api/authors/',
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

export interface CoursePropsApi {
  title?: string;
  description?: string;
  duration: number;
  authors: string[];
  id: string;
}

export interface AuthorsPropsApi {
  id: string;
  name: string;
}
