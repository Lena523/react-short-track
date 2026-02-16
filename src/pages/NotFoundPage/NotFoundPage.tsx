import Container from '@mui/material/Container';
import { Link } from 'react-router';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  return (
    <Container>
      <Typography variant="h1">Page is non found 404</Typography>
      <Link to="/">Home</Link>
    </Container>
  );
}
