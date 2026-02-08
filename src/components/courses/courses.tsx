import { Box } from '@mui/material';
import { useState } from 'react';
import SearchBar from './search-bar';
import AddNewCourseButton from './add-new-course-button';
import CoursesList from './courses-list';
import CourseCard from './courses-list/courses-card';
import { CourseInfoPage } from '@/pages';
import { EmptyCoursesList } from '@/components/empty-course-list';
import { CourseFormModal } from '@/components/course-form-modal';
import {
  findCourseByTitle,
  findCourseById,
  deleteCourseById,
} from '@/components/lib/utils';
import { CardCourseHandler } from '@/components/lib/types/domain';
import { CourseProps } from '../lib/types/domain';
import { CoursesProps } from '@/pages/types/pages';
import { GetCourseById } from '@/api-services/api-requests';

export default function Courses({
  courses,
  isLoading,
  handleCreateCourses,
}: CoursesProps) {
  const [course, setCourse] = useState('');
  const [newList, setNewList] = useState(courses);
  const [showCourse, setShowCourse] = useState<CourseProps | null>(null);
  const [createCourse, setCreateCourse] = useState(false);
  const renderList = course.length === 0 ? courses : newList ? newList : [];

  const handleChosenCourse: React.ComponentProps<'input'>['onChange'] = (e) => {
    const value = e.target.value;
    setCourse(value);
  };

  const handleSearchButton: React.ComponentProps<'button'>['onClick'] = (e) => {
    e.preventDefault();
    if (courses) {
      const foundCourse = findCourseByTitle(course, courses);
      setNewList(foundCourse);
    }
  };

  const handleShowCourse: CardCourseHandler = async (id: string) => {
    try {
      const courseToShow = await GetCourseById(id);
      console.log(courseToShow);
      setShowCourse(courseToShow);
    } catch (error) {
      console.error('Failed to fetch course', error);
    }
  };

  const handleBackToCourses = () => {
    setShowCourse(null);
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
          setNewList(newCourseList);
        }
      }
    }
  };

  const handleCreateNewCourse = () => {
    setCreateCourse(!createCourse);
  };

  return (
    <>
      <CourseFormModal
        isOpen={createCourse}
        onClose={handleCreateNewCourse}
        onCreate={handleCreateCourses}
      />
      {isLoading ? (
        <Box>Loading...</Box>
      ) : courses.length === 0 ? (
        <EmptyCoursesList onCreateNewCourse={handleCreateNewCourse} />
      ) : showCourse ? (
        <CourseInfoPage
          course={showCourse}
          courses={courses}
          handleCreateCourses={handleCreateCourses}
          handleBackToCourses={handleBackToCourses}
        />
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
              action="ADD NEW COURSE"
              onClick={handleCreateNewCourse}
              isDisabled={false}
            />
          </Box>
          <CoursesList>
            {renderList &&
              renderList.map((list) => (
                <CourseCard
                  key={list.id}
                  id={list.id}
                  title={list.title ?? ''}
                  description={list.description ?? ''}
                  authors={list.authors ?? []}
                  creationDate={
                    list.creationDate ? String(list.creationDate) : ''
                  }
                  duration={
                    typeof list.duration === 'string' ? list.duration : ''
                  }
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
