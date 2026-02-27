import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router';
import Header from '@components/Header/Header';
import { useAuthInitialization } from './hooks/useAuthInitialization';
import { ToastContainer } from 'react-tiny-toast';
import Spinner from '@components/common/Spinner/Spinner';

function App() {
  const { isLoading } = useAuthInitialization();

  return (
    <Box>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          gap: '10px',
        }}
      >
        <Header />
        {isLoading ? <Spinner /> : <Outlet />}
      </Container>
      <ToastContainer />;
    </Box>
  );
}

export default App;
