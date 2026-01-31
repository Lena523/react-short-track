import { CourseCardProps } from './types';
import { Authors } from './types';

export function defineCourseCardArguments(
  courseList: CourseCardProps[],
  authorsList: Authors[]
): CourseCardProps[] {
  return courseList.map((course) => ({
    ...course,
    authors: course.authors.map((authorId) => {
      const found = authorsList.find((author) => author.id === authorId);
      return found ? found.name : authorId;
    }),
  }));
}

export function findCourseByTitle(
  title: string,
  courseList: CourseCardProps[]
): CourseCardProps[] {
  const searchString = title.toLowerCase();

  return courseList.filter(
    (course) =>
      course.title.toLowerCase().includes(searchString) ||
      course.description.toLowerCase().includes(searchString)
  );
}
