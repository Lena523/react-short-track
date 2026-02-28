import { useForm, Controller } from 'react-hook-form';
import type { AddMovieFormInputs } from '@/components/types/movies-types';
import { textFieldSx } from '@/components/types/movies-types';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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

const genreOptions = ['Crime', 'Documentary', 'Horror', 'Comedy', 'Drama', 'Romance'];

export default function AddMovieForm() {
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

  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const onSubmit = (data: AddMovieFormInputs) => {
    console.log('Form data:', data);
    reset();
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
          <TextField
            label="TITLE"
            {...register('title', { required: 'ALL FIELDS ARE REQUIRED' })}
            error={!!errors.title}
            helperText={errors.title?.message}
            sx={textFieldSx}
          />
          <TextField
            label="RELEASE DATE"
            type="date"
            slotProps={{ inputLabel: { shrink: true } }}
            {...register('release_date', { required: 'the field is required!' })}
            error={!!errors.release_date}
            helperText={errors.release_date?.message}
            sx={textFieldSx}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input
              type="file"
              accept="image/*"
              id="poster-upload"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="poster-upload" style={{ minWidth: '200px' }}>
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
                sx={{
                  bgcolor: '#F65261',
                  width: '100%',
                }}
              >
                choose poster
              </Button>
            </label>
            {fileName && <Box sx={{ color: '#FFFFFF' }}>{fileName}</Box>}
          </Box>

          <input type="hidden" {...register('poster_path')} />

          <TextField
            label="RATING"
            type="number"
            placeholder="7.8"
            slotProps={{ htmlInput: { min: 0, max: 10, step: 0.1 } }}
            {...register('vote_average', {
              required: 'the field is required!',
              min: { value: 0, message: 'Minimum rating is 0' },
              max: { value: 10, message: 'Maximum rating is 10' },
              valueAsNumber: true,
            })}
            error={!!errors.vote_average}
            helperText={errors.vote_average?.message}
            sx={textFieldSx}
          />

          <FormControl error={!!errors.genres}>
            <InputLabel id="genre-label" sx={{ color: '#F65261' }}>
              GENRE
            </InputLabel>
            <Controller
              name="genres"
              control={control}
              rules={{
                required: 'the field is required!',
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

          <TextField
            label="RUNTIME"
            type="number"
            placeholder="minutes"
            {...register('runtime', {
              required: 'the field is required!',
              min: { value: 1, message: 'Runtime must be positive' },
              valueAsNumber: true,
            })}
            error={!!errors.runtime}
            helperText={errors.runtime?.message}
            sx={textFieldSx}
          />

          <TextField
            label="OVERVIEW"
            placeholder="Movie description"
            multiline
            rows={4}
            {...register('overview', { required: 'the field is required!' })}
            error={!!errors.overview}
            helperText={errors.overview?.message}
            sx={textFieldSx}
          />
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="blackButton" onClick={handleReset}>
              RESET
            </Button>
            <Button type="submit" variant="redButton" disabled={!isValid}>
              SUBMIT
            </Button>
          </Box>
        </Box>
      </form>
    </FormContainer>
  );
}
