import { Box } from '@mui/material';
import LoginButton from './login-button/login-button';
import UserName from './user-name/user-name';
import Logo from './logo/logo';
import { Handler } from '../lib/types';

export default function Header({ handleLogOut }: Handler) {
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
          onClick={handleLogOut}
          action={'LOGOUT'}
        />
      </Box>
    </Box>
  );
}
