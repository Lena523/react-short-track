import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Header } from './components';
import { Courses } from './components';

function App() {
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
        <Header />
        <Courses />
      </Container>
    </>
  );
}

export default App;
