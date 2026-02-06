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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@/pages';
import { TextField, Button, Typography } from '@mui/material';
import AuthorsActiveList from './authors-active-list/authors-active-list';
import CourseAuthorsList from './course-authors-list/course-authors-list';
import { Inputs, CourseFormModalprops } from '@/components/lib/types';

export default function CourseFormModal({
  isOpen,
  onClose,
}: CourseFormModalprops) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ criteriaMode: 'all', mode: 'onChange' });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
                      {...register('duration', {
                        required: 'duration is required',
                        pattern: {
                          value: /^([0-9]{1,2}):([0-5][0-9])$/,
                          message: 'Format must be hh:mm',
                        },
                        validate: (value) => {
                          const val = value ? value : '';
                          const [hours, minutes] = val.split(':').map(Number);
                          const totalMinutes = hours * 60 + minutes;
                          return totalMinutes > 0 || 'Duration must be > 0';
                        },
                      })}
                    />
                    {errors.duration && (
                      <ErrorMessage
                        textMessage={errors.duration.message ?? ''}
                      />
                    )}
                    <Typography variant="body1">
                      <b>00</b>:<b>00</b> hours
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  <Grid size={8}>
                    <Stack spacing={2}>
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
                          {...register('author')}
                        />
                        <Button sx={{ flexShrink: 0 }}>CREATE AUTHOR</Button>
                      </Box>
                      <AuthorsActiveList />
                    </Stack>
                  </Grid>
                  <Grid size={4}>
                    <CourseAuthorsList />
                  </Grid>
                </Grid>
                <DialogActions>
                  <Button onClick={onClose}>CANCEL</Button>
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
