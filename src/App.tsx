import { CssBaseline, Container } from '@mui/material';
import { Outlet } from 'react-router';
import Header from '@components/Header/Header';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Header />
        <Outlet />
      </Container>
      ;
    </>
  );
}

export default App;
