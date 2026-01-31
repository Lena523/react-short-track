import { Box } from '@mui/material';
import { useState } from 'react';
import SearchBar from './search-bar/search-bar';
import AddNewCourseButton from './add-new-course-button';
import CoursesList from './courses-list';
import CourseCard from './courses-list/courses-card';
import { mockedCoursesList, mockedAuthorsList } from '../lib/mockCoursesList';
import { defineCourseCardArguments, findCourseByTitle } from '../lib/utils';

export default function Courses() {
  const resultList = defineCourseCardArguments(
    mockedCoursesList,
    mockedAuthorsList
  );

  const [course, setCourse] = useState('');
  const [newList, setNewList] = useState(resultList);
  const handleChosenCourse: React.ComponentProps<'input'>['onChange'] = (e) => {
    const value = e.target.value;
    if (value === '') {
      setNewList(resultList);
    }
    setCourse(value);
  };

  const handleSearchButton: React.ComponentProps<'button'>['onClick'] = (e) => {
    e.preventDefault();
    const foundCourse = findCourseByTitle(course, resultList);
    setNewList(foundCourse);
  };

  const renderList =
    course.length === 0 ? resultList : newList.length > 0 ? newList : [];

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
        <SearchBar onChange={handleChosenCourse} onClick={handleSearchButton} />
        <AddNewCourseButton
          action={'ADD NEW COURSE'}
          onClick={() => console.log('')}
          isDisabled={false}
        />
      </Box>
      <CoursesList>
        {renderList.map((list) => (
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
