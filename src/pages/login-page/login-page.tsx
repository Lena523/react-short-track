import { Title } from '@/components';
import { LoginInput } from '@/components/login';
import { LoginButton } from '@/components/login';
import { Box, Container } from '@mui/material';
import { LoginProps } from '@/components/lib/types';

export default function LoginPage({ onLogin }: Pick<LoginProps, 'onLogin'>) {
  return (
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
      <form>
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
          <LoginInput
            label="Email"
            onChange={() => console.log('')}
            isDisabled={false}
            type="email"
            name="email"
          />
          <LoginInput
            label="Password"
            onChange={() => console.log('')}
            isDisabled={false}
            type="password"
            name="password"
          />
          <LoginButton action="LOGIN" onClick={onLogin} isDisabled={false} />
        </Box>
      </form>
    </Container>
  );
}
