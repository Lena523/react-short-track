import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';

export default function Logo() {
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.user.role);
  const handleNavigateToHomePage = () => {
    if (role !== 'unknown') {
      navigate('/');
    }
  };

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={handleNavigateToHomePage}>
      <img src="/logo.svg" alt="logo"></img>
    </Box>
  );
}
