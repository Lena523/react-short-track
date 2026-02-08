import { Typography, Box } from '@mui/material';
import { CourseCardProps } from '@/components/lib/types';

export default function CreationDate({
  creationDate,
}: Pick<CourseCardProps, 'creationDate'>) {
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
        Created:
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {creationDate}
      </Typography>
    </Box>
  );
}
