import Box from '@mui/material/Box';
import HeaderContainer from '@/components/Header/components/HeaderContainer';
import InputSearch from './components/SearchBlock';
import UserLogout from './components/UserButton';
import AddMovieButton from './components/AddMovieButton';
import useCheckLocation from '@/hooks/useCheckLocation';
import { Fragment } from 'react/jsx-runtime';
import Logo from './components/Logo';

export default function Header() {
  const isHomePage = useCheckLocation();
  const Wrapper = isHomePage ? HeaderContainer : Fragment;

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1200 }}>
      <Wrapper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            marginBottom: '50px',
          }}
        >
          <Logo />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <AddMovieButton />
            <UserLogout />
          </Box>
        </Box>
        <InputSearch />
      </Wrapper>
    </Box>
  );
}
