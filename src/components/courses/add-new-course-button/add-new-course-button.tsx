import { Button } from '@mui/material';
import type { ButtonElementProps } from '@/components/lib/types';

export default function AddNewCourseButton({
  action,
  onClick,
  isDisabled,
}: ButtonElementProps) {
  return (
    <Button
      disabled={isDisabled}
      size="small"
      variant="contained"
      onClick={onClick}
      sx={{
        borderRadius: '4px',
      }}
    >
      {action}
    </Button>
  );
}
