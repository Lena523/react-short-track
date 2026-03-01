import Container from '@mui/material/Container';
import EditMovieForm from '@/components/MovieForm/EditMovieForm/EditMovieForm';

export default function EditMoviePage() {
  return (
    <Container sx={{ backgroundColor: '#232323' }}>
      <EditMovieForm />
    </Container>
  );
}
