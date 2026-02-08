// pages.ts
import { CourseProps } from '../../components/lib/types/domain';
import { AuthHandler } from '../../components/lib/types/ui';

export type CoursesPageProps = {
  onLogout: () => void;
  userName: string;
  courses: CourseProps[];
  isLoading: boolean;
};

export type CourseInfoPageProps = {
  course: CourseProps;
  courses: CourseProps[];
};

export type CoursesProps = {
  courses: CourseProps[];
  isLoading?: boolean;
};

export type EmptyCoursesListProps = {
  handleCreateNewCourse: () => void;
};

export type LoginPageProps = {
  onLogout: () => void;
  onLogin: AuthHandler;
  userName: string;
};
