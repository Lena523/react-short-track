import { Box, Container } from '@mui/material';
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '50px 0',
        }}
      >
        <Courses />
      </Box>
    </Container>
  );
}
