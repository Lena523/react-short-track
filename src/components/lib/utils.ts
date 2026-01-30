import { CourseCardProps } from './types';
import { Authors } from './types';

export default function defineCourseCardArguments(
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
