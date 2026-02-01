import { Typography, Box } from '@mui/material';
import { CourseCardProps } from '@/components/lib/types';

export default function Id({ id }: Pick<CourseCardProps, 'id'>) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'baseline',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: '700',
          minWidth: '100px',
        }}
      >
        ID:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {id}
      </Typography>
    </Box>
  );
}
