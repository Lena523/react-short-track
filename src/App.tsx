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
import { LoginUser } from './api-services/api-requests';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('tokenAuth');
  });

  const [userName, setUserName] = useState('');

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
    setIsLoggedIn(false);
  };

  const handleLogin = async ({ ...data }: Inputs) => {
    try {
      const user = await LoginUser(data);
      localStorage.setItem('tokenAuth', JSON.stringify(user.accessToken));
      setIsLoggedIn(true);
      if (data.user) {
        setUserName(data.user);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        throw new Error('Unknown error');
      }
    }
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
        {isLoggedIn ? (
          <CoursesPage onLogout={handleLogout} userName={userName} />
        ) : (
          <LoginPage
            onLogin={handleLogin}
            onLogout={handleLogout}
            userName={userName}
          />
        )}
      </Container>
    </>
  );
}

export default App;
