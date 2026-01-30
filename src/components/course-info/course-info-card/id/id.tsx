import { Typography, Box } from '@mui/material';
import { CourseCardProps } from '@/components/lib/types';

export default function Id({ id }: Pick<CourseCardProps, 'id'>) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '7px',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '0.8em',
        }}
      >
        ID:
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {id}
      </Typography>
    </Box>
  );
}
