import { Header, Courses } from '@/components';
import { CoursesPageProps } from '@/pages/types/pages';
import { Spinner } from '@/components/spinner';

export default function CoursesPage({
  onLogout,
  userName,
  courses,
  isLoading,
  handleCreateCourses,
}: CoursesPageProps) {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Header onLogout={onLogout} isVisible={true} user={userName} />
      <Courses
        courses={courses}
        isLoading={isLoading}
        handleCreateCourses={handleCreateCourses}
      />
    </>
  );
}
