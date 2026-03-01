import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { LoginInputs } from '@/components/types/login-register-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormContainer } from '@/components/common/FormContainer/FormContainer';
import { useGetUserMutation } from '@/services/api/apiSlice';
import { useState } from 'react';
import { setAdmin, setUser, setUserData, setUserLoading } from '@/store/slices/userSlice';
import RegisterForm from '@components/RegisterForm/RegisterForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectUserIsLoading } from '@/store/selectors/userSelectors';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const [getUser] = useGetUserMutation();
  const onSubmit: SubmitHandler<LoginInputs> = async (user) => {
    try {
      dispatch(setUserLoading(true));
      const newUser = await getUser({ email: user.email, password: user.password }).unwrap();
      const token = newUser.data?.token;

      dispatch(
        setUserData({
          id: newUser.data.id,
          name: newUser.data.name,
          email: newUser.data.email,
          role: newUser.data.role,
        }),
      );

      localStorage.setItem('userToken', token);

      if (newUser.data.role === 'admin') {
        dispatch(setAdmin());
      } else if (newUser.data.role === 'user') {
        dispatch(setUser());
      }

      reset();
    } catch (error) {
      reset();
      dispatch(setUserLoading(false));
      console.error('Login failed', error);
    }
  };

  const userLoading = useAppSelector(selectUserIsLoading);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  const handleReset = () => {
    reset();
  };

  const handleOpenRegisterForm = () => {
    setIsRegisterFormOpen(!isRegisterFormOpen);
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
              disabled={userLoading}
            />
            <TextField
              aria-label="PASSWORD"
              type="password"
              placeholder="enter password"
              {...register('password', {
                required: 'The password is required',
                minLength: { value: 8, message: 'at least 8 symbols' },
                maxLength: { value: 20, message: 'at most 20 symbols' },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              disabled={userLoading}
            />
            <Button variant="redButton" type="submit" disabled={!isValid || userLoading}>
              {userLoading ? 'LOGGING IN...' : 'LOGIN'}
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
            <Button variant="blackButton" type="reset" onClick={handleReset} disabled={userLoading}>
              RESET
            </Button>
            <Button variant="redButton" onClick={handleOpenRegisterForm} disabled={userLoading}>
              REGISTER
            </Button>
          </Box>
        </Box>
      </form>
      <RegisterForm closeModal={handleOpenRegisterForm} isOpen={isRegisterFormOpen} />
    </FormContainer>
  );
}
