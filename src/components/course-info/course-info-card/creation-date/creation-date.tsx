import { Typography, Box } from '@mui/material';
import { CourseCardProps } from '@/components/lib/types/domain';

export default function CreationDate({
  creationDate,
}: Pick<CourseCardProps, 'creationDate'>) {
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
        Created:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {creationDate}
      </Typography>
    </Box>
  );
}
