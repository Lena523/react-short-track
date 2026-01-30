import { Box, Container } from '@mui/material';
import { Header, SearchBar } from '@/components';

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
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <SearchBar />
      </Box>
    </Container>
  );
}
