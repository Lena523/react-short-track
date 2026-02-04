import { Button } from '@mui/material';
import { ButtonElementProps } from '@/components/lib/types';

export default function LoginButton({ ...rest }: ButtonElementProps) {
  return (
    <Button onClick={rest.onClick} disabled={rest.isDisabled}>
      {rest.action}
    </Button>
  );
}
