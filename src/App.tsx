import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { CoursesPage, LoginPage } from '@/pages';
import { useEffect, useState } from 'react';
import { defineCourseCardArguments } from './components/lib/utils';
import type { Inputs, CourseProps } from './components/lib/types/domain';
import { LoginUser, GetCourses, GetAuthors } from './api-services/api-requests';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('tokenAuth');
  });

  const [userName, setUserName] = useState('');
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseList = await GetCourses();
        const authorsList = await GetAuthors();
        const resultList = defineCourseCardArguments(courseList, authorsList);
        setCourses(resultList);
      } catch (error) {
        console.error('Failed to fetch courses', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tokenAuth');
    setIsLoggedIn(false);
  };

  const handleLogin = async ({ ...data }: Inputs) => {
    try {
      const user = await LoginUser();
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
          <CoursesPage
            onLogout={handleLogout}
            userName={userName}
            courses={courses}
            isLoading={loading}
          />
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
