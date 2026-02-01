import { CourseInfoCardProps } from '@/components/lib/types';
import Description from './description/description';
import AuthorsList from './autors-list/authors-list';
import CreationDate from './creation-date/creation-date';
import Duration from './duration/duration';
import Id from './id/id';
import { Box, Typography } from '@mui/material';

export default function CourseInfoCard({ course }: CourseInfoCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        padding: '40px',
        borderRadius: '4px',
        boxShadow: 'revert-layer',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: '700',
          marginBottom: '10px',
        }}
      >
        Description
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
        }}
      >
        <Box>
          <Description text={course.description} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'flex-end',
            borderLeft: '2px solid gray',
            paddingLeft: '35px',
          }}
        >
          <Id id={course.id} />
          <Duration duration={course.duration} />
          <CreationDate creationDate={course.creationDate} />
          <AuthorsList authors={course.authors} />
        </Box>
      </Box>
    </Box>
  );
}
