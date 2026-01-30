import { Container } from '@mui/material';
import { Header, Courses } from '@/components';

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
      <Courses />
    </Container>
  );
}
