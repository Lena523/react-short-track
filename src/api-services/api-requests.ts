import { URL, LoginProps } from './lib/types';
import { CoursePropsApi, AuthorsPropsApi } from './lib/types';

export async function LoginUser(): Promise<LoginProps> {
  const response = await fetch(URL.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Login failed');
  }
  return result as LoginProps;
}

export async function GetCourses(): Promise<CoursePropsApi[]> {
  const response = await fetch(URL.COURSE, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting courses failed');
  }

  return result as CoursePropsApi[];
}

export async function GetAuthors(): Promise<AuthorsPropsApi[]> {
  const response = await fetch(URL.GETAUTHORS, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting courses failed');
  }

  return result as AuthorsPropsApi[];
}

export async function CreateCourse(
  course: Omit<CoursePropsApi, 'id'>
): Promise<CoursePropsApi[]> {
  const response = await fetch(URL.COURSE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting courses failed');
  }

  return result as CoursePropsApi[];
}
