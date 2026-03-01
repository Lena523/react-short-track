import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import type { AddMovieFormInputs } from '@/components/types/movies-types';
import { textFieldSx } from '@/components/types/movies-types';
import { useAppDispatch } from '@/store/hooks';
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  FormHelperText,
  OutlinedInput,
} from '@mui/material';
import { FormContainer } from '@/components/common/FormContainer/FormContainer';
import { useCreateMovieMutation } from '@/services/api/apiSlice';
import { addMovie } from '@/store/slices/movieSlice';

const genreOptions = ['Crime', 'Documentary', 'Horror', 'Comedy', 'Drama', 'Romance'];

export default function AddMovieForm() {
  const [createMovie, { isLoading }] = useCreateMovieMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<AddMovieFormInputs>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      release_date: '',
      poster_path: '',
      vote_average: undefined,
      genres: [],
      runtime: undefined,
      overview: '',
    },
  });

  const onSubmit: SubmitHandler<AddMovieFormInputs> = async (data) => {
    try {
      const newMovie = await createMovie({
        title: data.title,
        tagline: '',
        vote_average: data.vote_average,
        vote_count: 1,
        release_date: data.release_date,
        poster_path: data.poster_path,
        overview: data.overview,
        budget: 1,
        revenue: 1,
        runtime: data.runtime,
        genres: data.genres,
      }).unwrap();

      dispatch(addMovie(newMovie));
      reset();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <FormContainer>
      <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 4 }}>
        ADD MOVIE
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                label="TITLE"
                {...register('title', { required: 'Title is required' })}
                error={!!errors.title}
                helperText={errors.title?.message}
                sx={textFieldSx}
                fullWidth
              />
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                label="RELEASE DATE"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
                {...register('release_date', { required: 'Release date is required' })}
                error={!!errors.release_date}
                helperText={errors.release_date?.message}
                sx={textFieldSx}
                fullWidth
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                label="POSTER URL"
                placeholder="https://example.com/image.jpg"
                {...register('poster_path', {
                  required: 'Poster URL is required',
                  pattern: {
                    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i,
                    message: 'Please enter a valid URL',
                  },
                })}
                error={!!errors.poster_path}
                helperText={errors.poster_path?.message}
                sx={textFieldSx}
                fullWidth
              />
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                label="RATING"
                type="number"
                placeholder="7.8"
                slotProps={{ htmlInput: { min: 0, max: 10, step: 0.1 } }}
                {...register('vote_average', {
                  required: 'Rating is required',
                  min: { value: 0, message: 'Minimum rating is 0' },
                  max: { value: 10, message: 'Maximum rating is 10' },
                  valueAsNumber: true,
                })}
                error={!!errors.vote_average}
                helperText={errors.vote_average?.message}
                sx={textFieldSx}
                fullWidth
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <FormControl error={!!errors.genres} fullWidth>
                <InputLabel id="genre-label" sx={{ color: '#F65261' }}>
                  GENRE
                </InputLabel>
                <Controller
                  name="genres"
                  control={control}
                  rules={{
                    required: 'Genre is required',
                    validate: (value) => value?.length > 0 || 'At least one genre is required',
                  }}
                  render={({ field }) => (
                    <Select
                      labelId="genre-label"
                      label="GENRE"
                      multiple
                      value={field.value || []}
                      onChange={field.onChange}
                      input={<OutlinedInput label="GENRE" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              size="small"
                              sx={{ bgcolor: '#F65261', color: '#FFFFFF' }}
                            />
                          ))}
                        </Box>
                      )}
                      sx={{
                        color: '#FFFFFF',
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#424242' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#F65261' },
                        '& .MuiSvgIcon-root': { color: '#FFFFFF' },
                      }}
                    >
                      {genreOptions.map((genre) => (
                        <MenuItem key={genre} value={genre}>
                          {genre}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {errors.genres && <FormHelperText>{errors.genres.message}</FormHelperText>}
              </FormControl>
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                label="RUNTIME"
                type="number"
                placeholder="minutes"
                {...register('runtime', {
                  required: 'Runtime is required',
                  min: { value: 1, message: 'Runtime must be positive' },
                  valueAsNumber: true,
                })}
                error={!!errors.runtime}
                helperText={errors.runtime?.message}
                sx={textFieldSx}
                fullWidth
              />
            </Box>
          </Box>

          <Box>
            <TextField
              label="OVERVIEW"
              placeholder="Movie description"
              multiline
              rows={4}
              fullWidth
              {...register('overview', { required: 'Overview is required' })}
              error={!!errors.overview}
              helperText={errors.overview?.message}
              sx={textFieldSx}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="blackButton" onClick={handleReset} disabled={isLoading}>
              RESET
            </Button>
            <Button type="submit" variant="redButton" disabled={!isValid || isLoading}>
              {isLoading ? 'SUBMITTING...' : 'SUBMIT'}
            </Button>
          </Box>
        </Box>
      </form>
    </FormContainer>
  );
}
