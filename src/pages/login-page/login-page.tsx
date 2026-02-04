import { Title } from '@/components';
import { LoginInput } from '@/components/login';
import { LoginButton } from '@/components/login';
import { Box } from '@mui/material';

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '30px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Title text={'Login'} />
      <form>
        <LoginInput
          label="Email"
          onChange={() => console.log('')}
          isDisabled={false}
          type="email"
          name="email"
        />
        <LoginInput
          label="Passward"
          onChange={() => console.log('')}
          isDisabled={false}
          type="passward"
          name="passward"
        />
        <LoginButton
          action="LOGIN"
          onClick={() => console.log('')}
          isDisabled={false}
        />
      </form>
    </Box>
  );
}
