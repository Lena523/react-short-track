import { Typography, Box } from '@mui/material';
import { CourseCardProps } from '@/components/lib/types/domain';

export default function Duration({
  duration,
}: Pick<CourseCardProps, 'duration'>) {
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
        Duration:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {duration}
      </Typography>
    </Box>
  );
}
