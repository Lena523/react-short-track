import { MockedListProps } from './types';
import { Authors } from './types';

export function defineCourseCardArguments(
  courseList: MockedListProps[],
  authorsList: Authors[]
): MockedListProps[] {
  return courseList.map((course) => ({
    ...course,
    authors: course.authors.map((authorId) => {
      const found = authorsList.find((author) => author.id === authorId);
      return found ? found.name : authorId;
    }),
  }));
}

export function findCourseByTitle(
  text: string,
  courseList: MockedListProps[]
): MockedListProps[] {
  const searchString = text.toLowerCase();

  return courseList.filter(
    (course) =>
      course.title.toLowerCase().includes(searchString) ||
      course.description.toLowerCase().includes(searchString)
  );
}

export function findCourseById(
  id: string,
  courseList: MockedListProps[]
): MockedListProps | null {
  return courseList.find((course) => course.id === id) ?? null;
}

export function deleteCourseById(
  id: string,
  courses: MockedListProps[]
): MockedListProps[] | null {
  return courses.filter((course) => course.id !== id);
}
