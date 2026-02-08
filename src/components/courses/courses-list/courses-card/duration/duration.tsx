import { Typography, Box } from '@mui/material';
import { CourseCardProps } from '@/components/lib/types/domain';

export default function Duration({
  duration,
}: Pick<CourseCardProps, 'duration'>) {
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
        Duration:
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {duration}
      </Typography>
    </Box>
  );
}
