import { Box } from '@mui/material';
import SearchBar from './search-bar/search-bar';
import AddNewCourseButton from './add-new-course-button';
import CoursesList from './courses-list';
import CourseCard from './courses-list/courses-card';
import { mockedCoursesList, mockedAuthorsList } from '../lib/mockCoursesList';
import defineCourseCardAgruments from '../lib/utils';

export default function Courses() {
  const resultList = defineCourseCardAgruments(
    mockedCoursesList,
    mockedAuthorsList
  );
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        justifyItems: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        paddingTop: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <SearchBar />
        <AddNewCourseButton
          action={'ADD NEW COURSE'}
          onClick={() => console.log('')}
          isDisabled={false}
        />
      </Box>
      <CoursesList>
        {resultList.map((list) => (
          <CourseCard
            key={list.id}
            title={list.title}
            description={list.description}
            authors={list.authors}
            creationDate={list.creationDate}
            duration={list.duration}
          />
        ))}
      </CoursesList>
    </Box>
  );
}
