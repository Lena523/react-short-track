import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderContainer from '@/components/Header/HeaderContainer';
import InputSearch from './SearchBlock';
import UserLogout from './UserButton';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1200 }}>
      <HeaderContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            marginBottom: '50px',
          }}
        >
          <Box>
            <img src="logo.svg" alt="logo"></img>
          </Box>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="transparentButton">+ ADD MOVIE</Button>
            <UserLogout />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '60px' }}>
          <Typography variant="h1">FIND YOUR MOVIE</Typography>
          <InputSearch />
        </Box>
      </HeaderContainer>
    </Box>
  );
}
