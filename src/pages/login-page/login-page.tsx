import { Header, Title } from '@/components';
import { Box, Container, Button, TextField } from '@mui/material';
import { LoginProps, Inputs } from '@/components/lib/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import ErrorMessage from './error-message/error-message';

export default function LoginPage({
  onLogout,
  onLogin,
  userName,
}: LoginProps & { userName: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ criteriaMode: 'all', mode: 'onChange' });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onLogin(data);
  };

  return (
    <>
      <Header onLogout={onLogout} isVisible={false} user={userName} />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          gap: '30px',
        }}
      >
        <Title text={'Login'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              alignItems: 'center',
              padding: '60px 80px',
              backgroundColor: '#FFFFFF',
              borderRadius: '4px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TextField
                label="Your name"
                {...register('user', {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
              />
              {errors.user?.type === 'required' && (
                <ErrorMessage textMessage="your name is required" />
              )}
              {errors.user?.type === 'minLength' && (
                <ErrorMessage textMessage="at least 3 characters" />
              )}
              {errors.user?.type === 'maxLength' && (
                <ErrorMessage textMessage="at most 20 characters" />
              )}
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TextField
                label="Password"
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              />
              {errors.password?.type === 'required' && (
                <ErrorMessage textMessage="password is required" />
              )}
              {errors.password?.type === 'minLength' && (
                <ErrorMessage textMessage="at least 8 characters" />
              )}
              {errors.password?.type === 'maxLength' && (
                <ErrorMessage textMessage="at most 20 characters" />
              )}
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!isValid}
            >
              LOGIN
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}
