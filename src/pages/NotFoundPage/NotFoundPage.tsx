import { Typography, Container } from '@mui/material';
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <Container>
      <Typography variant="h1">Page is non found 404</Typography>
      <Link to="/">Home</Link>
    </Container>
  );
}
