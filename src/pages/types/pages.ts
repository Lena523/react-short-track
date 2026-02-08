// pages.ts
import { CourseProps } from '../../components/lib/types/domain';
import { AuthHandler } from '../../components/lib/types/ui';

export type CoursesPageProps = {
  onLogout: () => void;
  userName: string;
  courses: CourseProps[];
  isLoading: boolean;
  handleCreateCourses: () => void;
};

export type CourseInfoPageProps = {
  course: CourseProps;
  courses: CourseProps[];
  handleCreateCourses: () => void;
  handleBackToCourses: () => void;
};

export type CoursesProps = {
  courses: CourseProps[];
  isLoading?: boolean;
  handleCreateCourses: () => void;
};

export type EmptyCoursesListProps = {
  onCreateNewCourse: () => void;
};

export type LoginPageProps = {
  onLogout: () => void;
  onLogin: AuthHandler;
  userName: string;
};
