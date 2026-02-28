import Container from '@mui/material/Container';
import MovieForm from '@/components/MovieForm/MovieForm';

export default function HomePage() {
  return (
    <Container sx={{ backgroundColor: '#232323' }}>
      <MovieForm />
    </Container>
  );
}
