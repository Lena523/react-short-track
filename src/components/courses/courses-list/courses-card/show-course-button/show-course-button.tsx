import { Button } from '@mui/material';
import { ButtonElementProps } from '@/components/lib/types/ui';

export default function ShowCourseButton({
  action,
  isDisabled,
  onClick,
}: ButtonElementProps) {
  return (
    <Button disabled={isDisabled} onClick={onClick}>
      {action}
    </Button>
  );
}
