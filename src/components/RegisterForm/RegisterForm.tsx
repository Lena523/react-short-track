import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { RegisterInputs, RegisterFormProps } from '@/components/types/login-register-types';
import { useRegisterUserMutation } from '@/services/api/apiSlice';
import { useAppDispatch } from '@/store/hooks';
import { setUserLoading } from '@/store/slices/userSlice';

export default function RegisterForm({ closeModal, isOpen }: RegisterFormProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RegisterInputs>({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const [registerUser, message] = useRegisterUserMutation();
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      dispatch(setUserLoading(true));
      await registerUser({ name: data.name, email: data.email, password: data.password });
      dispatch(setUserLoading(false));
      reset();
      closeModal();
    } catch {
      console.error(message);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Dialog open={isOpen} fullScreen={fullScreen} maxWidth={'md'}>
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
            <Typography variant="h1">REGISTER</Typography>
            <TextField
              aria-label="Register"
              placeholder="enter name"
              {...register('name', {
                required: 'The name is required',
                minLength: { value: 2, message: 'at least 2 symbols' },
                maxLength: { value: 20, message: 'at most 20 symbols' },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
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
              type="password"
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
            <DialogActions>
              <Button variant="blackButton" type="reset" onClick={handleReset}>
                RESET
              </Button>
              <Button variant="redButton" type="submit" disabled={!isValid}>
                REGISTER
              </Button>
              <Button variant="blackButton" onClick={closeModal}>
                CANCEL
              </Button>
            </DialogActions>
          </Box>
        </Box>
      </form>
    </Dialog>
  );
}
