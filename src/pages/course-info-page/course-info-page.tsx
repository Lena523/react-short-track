import { Box } from '@mui/material';
import { Title, BackButton, CourseInfoCard } from '@/components/course-info';
import { CourseInfoPageProps } from '@/pages/types/pages';
import { useState } from 'react';
import Courses from '@/components/courses/courses';

export default function CourseInfoPage({
  course,
  courses,
}: CourseInfoPageProps) {
  const [backToCourses, setBackToCourses] = useState(false);

  const handleBackToCourses = () => {
    setBackToCourses(true);
  };

  return (
    <>
      {backToCourses ? (
        <Courses courses={courses} />
      ) : (
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
      )}
    </>
  );
}
