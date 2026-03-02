import Container from '@mui/material/Container';
import MovieDetails from '@/components/MovieDetails/MovieDetails';

export default function MoviePage() {
  return (
    <Container sx={{ backgroundColor: '#232323' }}>
      <MovieDetails />
    </Container>
  );
}
