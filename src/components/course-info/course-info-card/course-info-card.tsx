import { CourseCardProps } from '@/components/lib/types';
import Description from './description/description';
import AuthorsList from './autors-list/authors-list';
import CreationDate from './creation-date/creation-date';
import Duration from './duration/duration';
import Id from './id/id';
import { Box } from '@mui/material';

export default function CourseInfoCard({
  authors,
  creationDate,
  description,
  duration,
  id,
}: CourseCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        padding: '20px 25px',
        border: '2px solid #000000',
        borderRadius: '4px',
        boxShadow: 'revert-layer',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
      }}
    >
      <Box>
        <Description text={description} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Id id={id} />
        <Duration duration={duration} />
        <CreationDate creationDate={creationDate} />
        <AuthorsList authors={authors} />
      </Box>
    </Box>
  );
}
