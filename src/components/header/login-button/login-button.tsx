import { Button } from '@mui/material';
import { ButtonElementProps } from '@/components/lib/types';

export default function LoginButton({
  action,
  onClick,
  isDisabled,
}: ButtonElementProps) {
  return (
    <Button disabled={isDisabled} onClick={onClick}>
      {action}
    </Button>
  );
}
