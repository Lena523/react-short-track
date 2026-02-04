import { Box } from '@mui/material';
import { useState } from 'react';
import SearchBar from './search-bar/search-bar';
import AddNewCourseButton from './add-new-course-button';
import CoursesList from './courses-list';
import CourseCard from './courses-list/courses-card';
import CourseInfo from '../course-info/course-info';
import { EmptyCoursesList } from '../empty-course-list';
import {
  findCourseByTitle,
  findCourseById,
  deleteCourseById,
} from '../lib/utils';
import { CardCourseHandler, MockedListProps } from '../lib/types';

export default function Courses() {
  const [allCourses, setAllCourses] = useState<MockedListProps[]>(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : [];
  });
  const [course, setCourse] = useState('');
  const [newList, setNewList] = useState(allCourses);
  const [showCourse, setShowCourse] = useState<MockedListProps | null>(null);
  const renderList = course.length === 0 ? allCourses : newList ? newList : [];

  const handleChosenCourse: React.ComponentProps<'input'>['onChange'] = (e) => {
    const value = e.target.value;
    if (value === '' && allCourses !== null) {
      setNewList(allCourses);
    }
    setCourse(value);
  };

  const handleSearchButton: React.ComponentProps<'button'>['onClick'] = (e) => {
    e.preventDefault();
    if (allCourses) {
      const foundCourse = findCourseByTitle(course, allCourses);
      setNewList(foundCourse);
    }
  };

  const handleShowCourse: CardCourseHandler = (id: string) => {
    if (allCourses) {
      const course = findCourseById(id, renderList);
      setShowCourse(course);
    }
  };

  const handleDeleteCourse: CardCourseHandler = (id: string) => {
    const courseToDelete = findCourseById(id, renderList);
    console.log(courseToDelete);
    if (courseToDelete) {
      const courses = localStorage.getItem('courses');
      if (courses) {
        const newCourseList = deleteCourseById(
          courseToDelete.id,
          JSON.parse(courses)
        );
        localStorage.setItem('courses', JSON.stringify(newCourseList));
        if (newCourseList) {
          setAllCourses(newCourseList);
          setNewList(newCourseList);
        }
      }
    }
  };

  return (
    <>
      {allCourses.length === 0 ? (
        <EmptyCoursesList />
      ) : showCourse ? (
        <CourseInfo course={showCourse} />
      ) : (
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
            <SearchBar
              onChange={handleChosenCourse}
              onClick={handleSearchButton}
            />
            <AddNewCourseButton
              action={'ADD NEW COURSE'}
              onClick={() => console.log('')}
              isDisabled={false}
            />
          </Box>
          <CoursesList>
            {renderList &&
              renderList.map((list) => (
                <CourseCard
                  id={list.id}
                  key={list.id}
                  title={list.title}
                  description={list.description}
                  authors={list.authors}
                  creationDate={list.creationDate}
                  duration={list.duration}
                  onShowCourse={handleShowCourse}
                  onDeleteCourse={handleDeleteCourse}
                />
              ))}
          </CoursesList>
        </Box>
      )}
    </>
  );
}
