import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { Inputs } from '@/types/login-form-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormContainer } from '@components/common/FormContainer/FormContainer';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ criteriaMode: 'all', mode: 'onChange' });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleReset = () => {
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: { xs: 'auto', md: '500px' },
            height: '100%',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="h1">LOGIN</Typography>
            <TextField
              aria-label="EMAIL"
              placeholder="enter email"
              {...register('email', {
                required: 'The email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'The wrong format of email',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              aria-label="PASSWORD"
              placeholder="enter password"
              {...register('password', {
                required: 'The password is required',
                minLength: { value: 8, message: 'at least 8 symbols' },
                maxLength: { value: 20, message: 'at most 20 symbols' },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
            <Button variant="blackButton" onClick={handleReset}>
              RESET
            </Button>
            <Button variant="redButton" type="submit" disabled={!isValid}>
              LOGIN
            </Button>
          </Box>
        </Box>
      </form>
    </FormContainer>
  );
}
