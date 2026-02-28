import Button from '@mui/material/Button';
import { useAppSelector } from '@/store/hooks';
import useCheckLocation from '@/hooks/useCheckLocation';
import { useNavigate } from 'react-router';

export default function AddMovieButton() {
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.user.role);
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
