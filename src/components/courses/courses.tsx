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
    <>
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
    </>
  );
}
