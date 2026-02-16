import { CssBaseline, Container, Box } from '@mui/material';
import { Outlet } from 'react-router';
import Header from '@components/Header/Header';

function App() {
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
        <Outlet />
      </Container>
      ;
    </Box>
  );
}

export default App;
