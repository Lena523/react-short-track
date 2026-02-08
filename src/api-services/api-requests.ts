import { URL, LoginProps } from './lib/types';
import { CoursePropsApi, AuthorsPropsApi } from './lib/types';
import { CourseProps } from '@/components/lib/types/domain';

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

export async function GetCourses(): Promise<CourseProps[]> {
  const response = await fetch(URL.COURSE, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting courses failed');
  }

  return result as CourseProps[];
}

export async function GetAuthors(): Promise<AuthorsPropsApi[]> {
  const response = await fetch(URL.GETAUTHORS, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting authors failed');
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

export async function CreateAuthor(name: string): Promise<AuthorsPropsApi> {
  const response = await fetch(URL.GETAUTHORS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Creating an author failed');
  }

  return response.json() as Promise<AuthorsPropsApi>;
}

export async function GetCourseById(id: string): Promise<CourseProps> {
  const response = await fetch(`${URL.IDCOURSE}${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting the course failed');
  }
  return result as CourseProps;
}

async function GetAuthorById(id: string): Promise<AuthorsPropsApi> {
  const response = await fetch(`${URL.IDAUTHORS}${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Getting the author failed');
  }
  return result as AuthorsPropsApi;
}

export async function GetAuthorsByIds(
  ids: string[]
): Promise<AuthorsPropsApi[]> {
  const promises = ids.map((id) => GetAuthorById(id));
  return Promise.all(promises);
}

export async function CreateAuthors(
  authors: string[]
): Promise<AuthorsPropsApi[]> {
  const promises = authors.map((author) => CreateAuthor(author));
  return Promise.all(promises);
}
