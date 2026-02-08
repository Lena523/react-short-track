import { Box } from '@mui/material';
import LoginButton from './login-button/login-button';
import UserName from './user-name/user-name';
import Logo from './logo/logo';

export default function Header() {
  return (
    <Box
      component={'header'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Logo />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <UserName text={'Harry Potter'}></UserName>
        <LoginButton
          isDisabled={false}
          onClick={() => console.log('')}
          action={'LOGOUT'}
        />
      </Box>
    </Box>
  );
}
