import Button from '@mui/material/Button';
import { ButtonElementProps } from '../lib/types';

export default function ButtonElement({
  action,
  onClick,
  isActive,
}: ButtonElementProps) {
  return (
    <Button disabled={isActive} variant="contained" onClick={onClick}>
      {action}
    </Button>
  );
}
