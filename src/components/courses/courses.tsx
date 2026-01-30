import { Box } from '@mui/material';
import SearchBar from './search-bar/search-bar';
import AddNewCourseButton from './add-new-course-button/add-new-course-button';

export default function Courses() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '800px',
      }}
    >
      <SearchBar />
      <AddNewCourseButton
        action={'ADD NEW COURSE'}
        onClick={() => console.log('')}
        isDisabled={false}
      />
    </Box>
  );
}
