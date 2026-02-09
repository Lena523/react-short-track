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

  if (!isLoggedIn) {
    window.history.pushState({}, '', '/login');
  }

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });
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
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
  };

  const handleCreateCourses = async () => {
    const newCoursesList = await GetCourses();
    const newAutors = await GetAuthors();
    const newResultList = defineCourseCardArguments(newCoursesList, newAutors);
    setCourses(newResultList);
  };

  const handleLogin = async ({ ...data }: Inputs) => {
    try {
      const user = await LoginUser();
      localStorage.setItem('tokenAuth', JSON.stringify(user.accessToken));
      setIsLoggedIn(true);
      window.history.pushState({}, '', '/courses');
      if (data.user) {
        setUserName(data.user);
        localStorage.setItem('userName', data.user);
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
          margin: '0 auto',
          minHeight: '100vh',
          padding: '0 20px',
        }}
      >
        {isLoggedIn ? (
          <CoursesPage
            onLogout={handleLogout}
            userName={userName}
            courses={courses}
            isLoading={loading}
            handleCreateCourses={handleCreateCourses}
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
