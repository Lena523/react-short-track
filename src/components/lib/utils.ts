import { CoursePropsApi, AuthorsPropsApi } from '@/api-services/lib/types';
import { CourseProps } from './types';

export function defineCourseCardArguments(
  courseList: CoursePropsApi[],
  authorsList: AuthorsPropsApi[]
): CourseProps[] {
  return courseList.map((course) => ({
    user: course.user,
    title: course.title,
    description: course.description,
    creationDate: formatDate(String(course.creationDate)),
    duration: formatDuration(Number(course.duration)),
    authors: course.authors.map((authorId) => {
      const found = authorsList.find((author) => author.id === authorId);
      return found ? found.name : authorId;
    }),
    id: course.id,
  }));
}

export function findCourseByTitle(
  text: string,
  courseList: CourseProps[]
): CourseProps[] {
  const searchString = text.toLowerCase();

  return courseList.filter(
    (course) =>
      course.title.toLowerCase().includes(searchString) ||
      course.description.toLowerCase().includes(searchString)
  );
}

export function findCourseById(
  id: string,
  courseList: CourseProps[]
): CourseProps | null {
  return courseList.find((course) => course.id === id) ?? null;
}

export function deleteCourseById(
  id: string,
  courses: CourseProps[]
): CourseProps[] | null {
  return courses.filter((course) => course.id !== id);
}

export const formatDuration = (minutes?: number) => {
  if (!minutes || minutes <= 0) return '';
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

export const formatDate = (timestamp: number | string): string => {
  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleDateString('ru-RU');
};
