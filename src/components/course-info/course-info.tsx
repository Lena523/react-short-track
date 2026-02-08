import { Box } from '@mui/material';
import Title from './course-info-title/course-info-title';
import BackButton from './back-button/back-button';
import { CourseInfoCardProps } from '@/components/lib/types';
import CourseInfoCard from './course-info-card';
import { useState } from 'react';
import Courses from '../courses/courses';

export default function CourseInfo({ course }: CourseInfoCardProps) {
  const [backToCourses, setBackToCourses] = useState(false);

  const handleBackToCourses = () => {
    setBackToCourses(true);
  };

  return (
    <>
      {backToCourses ? (
        <Courses />
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
