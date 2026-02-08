import { CourseCardProps } from '@/components/lib/types/domain';
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
          maxWidth: '180px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {authors[0]}, {authors[1]}{' '}
      </Typography>
    </Box>
  );
}
