import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  useTheme,
  Box,
  Grid,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@/pages';
import { TextField, Button, Typography } from '@mui/material';
import AuthorsActiveList from './authors-active-list/authors-active-list';
import CourseAuthorsList from './course-authors-list/course-authors-list';
import { Inputs, CourseFormModalProps } from '@/components/lib/types/domain';
import { CreateCourse } from '@/api-services/api-requests';
import { formatDuration } from '../lib/utils';

export default function CourseFormModal({
  isOpen,
  onClose,
  onCreate,
}: CourseFormModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({ criteriaMode: 'all', mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      duration: Number(data.duration),
      authors: courseAuthors,
    };
    CreateCourse(payload);
    setAuthors([]);
    setCourseAuthors([]);
    reset();
    onCreate();
    onClose();
  };
  const [authors, setAuthors] = useState<string[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<string[]>([]);
  const durationValue = watch('duration');

  const handleAuthorCreate: React.ComponentProps<'button'>['onClick'] = (e) => {
    e.preventDefault();
    const authorName = getValues('author');
    if (authorName && authorName.length > 1) {
      setAuthors((prev) => [...prev, authorName]);
      reset({ author: '' });
    }
  };

  const handleAddToCourseAuthorList = (item: string) => {
    if (item && item.length > 1) {
      setCourseAuthors((prev) => [...prev, item]);
      const activeAuthors = authors.filter((author) => author !== item);
      setAuthors(activeAuthors);
    }
  };

  const handleDeleteFromCourseAuthorList = (item: string) => {
    if (item && item.length > 1) {
      setAuthors((prev) => [...prev, item]);
      const courseNewAuthors = courseAuthors.filter(
        (author) => author !== item
      );
      setCourseAuthors(courseNewAuthors);
    }
  };

  const handleClose = () => {
    reset();
    setAuthors([]);
    setCourseAuthors([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} fullScreen={fullScreen} maxWidth={'md'}>
      <Box
        sx={{
          padding: '0px 30px',
        }}
      >
        <DialogTitle
          variant="h5"
          sx={{
            fontWeight: '700',
          }}
        >
          Course Edit/Create
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              pt: '20px',
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <TextField
                  label="Title"
                  {...register('title', { required: true, minLength: 2 })}
                />
                {errors.title?.type === 'required' && (
                  <ErrorMessage textMessage="title is required" />
                )}
                {errors.title?.type === 'minLength' && (
                  <ErrorMessage textMessage="at least 2 characters" />
                )}
                <TextField
                  multiline
                  minRows={4}
                  label="Description"
                  {...register('description', { required: true, minLength: 2 })}
                />
                {errors.description?.type === 'required' && (
                  <ErrorMessage textMessage="description is required" />
                )}
                {errors.description?.type === 'minLength' && (
                  <ErrorMessage textMessage="at least 2 characters" />
                )}
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: '1.1em', fontWeight: '700' }}
                  >
                    Duration
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      display: 'flex',
                      gap: '15px',
                      alignItems: 'center',
                    }}
                  >
                    <TextField
                      label="Duration"
                      type="number"
                      slotProps={{ htmlInput: { min: 1 } }}
                      {...register('duration', {
                        required: 'duration is required',
                      })}
                    />
                    {errors.duration?.type === 'required' && (
                      <ErrorMessage textMessage="duration is required" />
                    )}
                    <Typography>
                      {formatDuration(Number(durationValue))}
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={6}>
                  <Grid size={7}>
                    <Stack spacing={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontSize: '1.1em', fontWeight: '700' }}
                      >
                        Authors
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '15px',
                          width: '100%',
                        }}
                      >
                        <TextField
                          label="Author Name"
                          {...register('author', {
                            minLength: 2,
                          })}
                        />
                        {errors.author?.type === 'minLength' && (
                          <ErrorMessage textMessage="at least 2 characters" />
                        )}
                        <Button onClick={handleAuthorCreate}>
                          CREATE AUTHOR
                        </Button>
                      </Box>
                      <AuthorsActiveList
                        authors={authors}
                        onAddCourseAuthor={handleAddToCourseAuthorList}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={5}>
                    <CourseAuthorsList
                      courseAuthors={courseAuthors}
                      onDeleteActiveAuthor={handleDeleteFromCourseAuthorList}
                    />
                  </Grid>
                </Grid>
                <DialogActions>
                  <Button onClick={handleClose}>CANCEL</Button>
                  <Button type="submit" disabled={!isValid}>
                    CREATE COURSE
                  </Button>
                </DialogActions>
              </Box>
            </form>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
