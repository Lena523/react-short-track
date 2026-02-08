import { Box } from '@mui/material';
import { Title, BackButton, CourseInfoCard } from '@/components/course-info';
import { CourseInfoPageProps } from '@/pages/types/pages';

export default function CourseInfoPage({
  course,
  handleBackToCourses,
}: CourseInfoPageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        margin: '0 auto',
        maxWidth: '900px',
        paddingTop: '50px',
      }}
    >
      <Title text={course.title} />
      <CourseInfoCard course={course} />
      <BackButton
        action={'BACK'}
        onClick={handleBackToCourses}
        isDisabled={false}
      />
    </Box>
  );
}
