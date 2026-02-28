import Container from '@mui/material/Container';
import MovieContainer from '@/components/Header/components/MoviesContainer/MoviesContainer';

export default function HomePage() {
  return (
    <Container sx={{ backgroundColor: '#232323' }}>
      <MovieContainer />
    </Container>
  );
}
