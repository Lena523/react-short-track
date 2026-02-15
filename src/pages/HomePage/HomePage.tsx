import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router';

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h1">Home Page</Typography>
      <Outlet />
    </Container>
  );
}
