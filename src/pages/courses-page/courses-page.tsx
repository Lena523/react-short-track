import { Header, Courses } from '@/components';
import { CoursesPageProps } from '@/pages/types/pages';
import { Box } from '@mui/material';

export default function CoursesPage({
  onLogout,
  userName,
  courses,
  isLoading,
}: CoursesPageProps) {
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  return (
    <>
      <Header onLogout={onLogout} isVisible={true} user={userName} />
      <Courses courses={courses} isLoading={isLoading} />
    </>
  );
}
