import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router';

export default function MoviePage() {
  return (
    <Container>
      <Typography variant="h1">Movie Page</Typography>
      <Outlet />
    </Container>
  );
}
