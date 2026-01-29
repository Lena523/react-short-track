import Container from '@mui/material/Container';
import Header from '../../widgets/header/header';

export default function CoursesPage() {
  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: '#D3D3D3',
        height: '100vh',
      }}
    >
      <Header />
    </Container>
  );
}
