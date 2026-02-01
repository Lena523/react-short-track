import { Box } from '@mui/material';
import Title from './title/title';
import Subtitle from './subtitle/subtitle';
import AddNewCourseButton from './add-new-course-button/add-new-course-button';
import Courses from '../courses/courses';
import { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../lib/mockCoursesList';
import { defineCourseCardArguments } from '../lib/utils';

export default function EmptyCoursesList() {
  const [resettingCourses, setResettingCourses] = useState(false);

  const handleResettingCourses = () => {
    const resultList = defineCourseCardArguments(
      mockedCoursesList,
      mockedAuthorsList
    );
    localStorage.setItem('courses', JSON.stringify(resultList));
    setResettingCourses(true);
  };
  return (
    <>
      {resettingCourses ? (
        <Courses />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            height: '100vh',
          }}
        >
          <Title />
          <Subtitle />
          <AddNewCourseButton
            action={'ADD NEW COURSE'}
            isDisabled={false}
            onClick={handleResettingCourses}
          />
        </Box>
      )}
    </>
  );
}
