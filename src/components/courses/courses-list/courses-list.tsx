import { Container } from '@mui/material';
import { BasicChildrenProps } from '@/components/lib/types';

export default function CoursesList({ children }: BasicChildrenProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      {children}
    </Container>
  );
}
