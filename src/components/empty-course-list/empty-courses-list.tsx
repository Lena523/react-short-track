import { Box } from '@mui/material';
import Title from './title/title';
import Subtitle from './subtitle/subtitle';
import AddNewCourseButton from './add-new-course-button/add-new-course-button';
import { EmptyCoursesListProps } from '../../pages/types/pages';

export default function EmptyCoursesList({
  handleCreateNewCourse,
}: EmptyCoursesListProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        height: 'calc(100vh - 200px)',
      }}
    >
      <Title />
      <Subtitle />
      <AddNewCourseButton
        action={'ADD NEW COURSE'}
        isDisabled={false}
        onClick={handleCreateNewCourse}
      />
    </Box>
  );
}
