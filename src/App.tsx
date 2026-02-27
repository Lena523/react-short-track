import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router';
import Header from '@components/Header/Header';
import { useAuthInitialization } from './hooks/useAuthInitialization';

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
        {isLoading ? <div>Loading ...</div> : <Outlet />}
      </Container>
      ;
    </Box>
  );
}

export default App;
