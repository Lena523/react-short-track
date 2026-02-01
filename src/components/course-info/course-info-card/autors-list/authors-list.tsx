import { CourseCardProps } from '@/components/lib/types';
import { Typography, Box } from '@mui/material';

export default function AuthorsList({
  authors,
}: Pick<CourseCardProps, 'authors'>) {
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
        Authors:{' '}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {authors[0]}, {authors[1]}{' '}
      </Typography>
    </Box>
  );
}
