import { Button } from '@mui/material';
import { ButtonElementProps } from '@/components/lib/types/ui';

export default function ShowCourseButton({
  action,
  isDisabled,
  onClick,
}: ButtonElementProps) {
  return (
    <Button
      disabled={isDisabled}
      onClick={onClick}
      sx={{
        width: '140px',
        px: 2,
        py: 1,
        fontSize: '0.875rem',
        borderRadius: '6px',
      }}
    >
      {action}
    </Button>
  );
}
