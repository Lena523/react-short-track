import { Box } from '@mui/material';
import LoginButton from './login-button/login-button';
import UserName from './user-name/user-name';
import Logo from './logo/logo';
import { HeaderProps } from '../lib/types/ui';

export default function Header({ onLogout, isVisible, user }: HeaderProps) {
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
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      >
        <UserName text={user}></UserName>
        <LoginButton isDisabled={false} onClick={onLogout} action={'LOGOUT'} />
      </Box>
    </Box>
  );
}
