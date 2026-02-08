import { Button } from '@mui/material';
import type { ButtonElementProps } from '@/components/lib/types/ui';

export default function SearchButton({
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
