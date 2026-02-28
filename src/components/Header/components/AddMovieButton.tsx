import Button from '@mui/material/Button';
import { useAppSelector } from '@/store/hooks';

export default function AddMovieButton() {
  const role = useAppSelector((state) => state.user.role);

  if (role !== 'admin') {
    return null;
  }

  return <Button variant="transparentButton">+ ADD MOVIE</Button>;
}
