import Container from '@mui/material/Container';
import AddMovieForm from '@/components/MovieForm/AddMovieForm/AddMovieForm';

export default function CreateMoviePage() {
  return (
    <Container sx={{ backgroundColor: '#606060' }}>
      <AddMovieForm />
    </Container>
  );
}
