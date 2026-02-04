import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { CoursesPage } from '@/pages';
import {
  mockedAuthorsList,
  mockedCoursesList,
} from './components/lib/mockCoursesList';
import { useEffect } from 'react';
import { defineCourseCardArguments } from './components/lib/utils';

function App() {
  const resultList = defineCourseCardArguments(
    mockedCoursesList,
    mockedAuthorsList
  );

  useEffect(() => {
    if (localStorage.getItem('courses')) {
      return;
    }
    localStorage.setItem('courses', JSON.stringify(resultList));
  }, [resultList]);

  return (
    <>
      <CssBaseline />
      <Container
        disableGutters
        sx={{
          backgroundColor: '#D3D3D3',
          height: '100vh',
        }}
      >
        <CoursesPage />
      </Container>
    </>
  );
}

export default App;
