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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container>
        <Header />
        {isLoading ? <Spinner /> : <Outlet />}
      </Container>
      <ToastContainer />;
    </Box>
  );
}

export default App;
