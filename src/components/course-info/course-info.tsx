import { Box } from '@mui/material';
import Title from './course-info-title/course-info-title';
import BackButton from './back-button/back-button';
import { CourseInfoCardProps } from '@/components/lib/types';
import CourseInfoCard from './course-info-card';

export default function CourseInfo({ course }: CourseInfoCardProps) {
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
        onClick={() => console.log('')}
        isDisabled={false}
      />
    </Box>
  );
}
