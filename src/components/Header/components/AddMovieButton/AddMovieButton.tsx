import Button from '@mui/material/Button';
import { useAppSelector } from '@/store/hooks';
import useCheckLocation from '@/hooks/useCheckLocation';
import { useNavigate } from 'react-router';
import { selectUserRole } from '@/store/selectors/userSelectors';

export default function AddMovieButton() {
  const navigate = useNavigate();
  const role = useAppSelector(selectUserRole);
  const isHomePage = useCheckLocation();

  if (role === 'admin' && isHomePage) {
    return (
      <Button variant="transparentButton" onClick={() => navigate('/create-movie')}>
        + ADD MOVIE
      </Button>
    );
  }

  return null;
}
