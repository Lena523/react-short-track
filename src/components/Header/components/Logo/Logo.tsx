import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { selectUserRole } from '@/store/selectors/userSelectors';

export default function Logo() {
  const navigate = useNavigate();
  const role = useAppSelector(selectUserRole);
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
