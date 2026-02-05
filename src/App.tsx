import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { CoursesPage, LoginPage } from '@/pages';
import {
  mockedAuthorsList,
  mockedCoursesList,
} from './components/lib/mockCoursesList';
import { useEffect, useState } from 'react';
import { defineCourseCardArguments } from './components/lib/utils';
import type { Inputs } from './components/lib/types';

function App() {
  const [loginRender, setLoginRender] = useState(() => {
    return !localStorage.getItem('tokenAuth');
  });

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

  const handleLogout = () => {
    localStorage.removeItem('tokenAuth');
    setLoginRender(false);
  };

  const handleLogin = ({ ...data }: Inputs) => {
    localStorage.setItem('tokenAuth', '');
    setLoginRender(true);
    console.log(data);
  };

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
        {loginRender ? (
          <LoginPage onLogin={handleLogin} onLogout={handleLogout} />
        ) : (
          <CoursesPage onLogout={handleLogout} />
        )}
      </Container>
    </>
  );
}

export default App;
