import { Box } from '@mui/material';
import Title from './title/title';
import Description from './description/description';
import AuthorsList from './authors-list/authors-list';
import Duration from './duration/duration';
import CreationDate from './creation-date/creation-date';
import ShowCourseButton from './show-course-button/show-course-button';
import DeleteCourseButton from './delete-course-button/delete-course-button';
import EditCourseButton from './edit-course-button/edit-course-button';
import { CourseCardProps } from '@/components/lib/types';

export default function CourseCard({
  title,
  description,
  authors,
  duration,
  creationDate,
}: CourseCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        padding: '20px 25px',
        border: '2px solid #000000',
        borderRadius: '4px',
        boxShadow: 'revert-layer',
      }}
    >
      <Title text={title} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
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
            gap: '10px',
          }}
        >
          <Box>
            <AuthorsList authors={authors} />
            <Duration duration={duration} />
            <CreationDate creationDate={creationDate} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
            }}
          >
            <ShowCourseButton
              action="SHOW COURSE"
              isDisabled={false}
              onClick={() => console.log('')}
            />
            <DeleteCourseButton
              isDisabled={false}
              onClick={() => console.log('')}
            />
            <EditCourseButton
              isDisabled={false}
              onClick={() => console.log('')}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
