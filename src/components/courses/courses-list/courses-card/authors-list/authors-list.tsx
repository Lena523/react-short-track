import { CourseCardProps } from '@/components/lib/types';
import { Typography, Box } from '@mui/material';

export default function AuthorsList({
  authors,
}: Pick<CourseCardProps, 'authors'>) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '7px',
        alignItems: 'baseline',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '0.8em',
        }}
      >
        Authors:{' '}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.8em',
        }}
      >
        {authors[0]}, {authors[1]}{' '}
      </Typography>
    </Box>
  );
}
