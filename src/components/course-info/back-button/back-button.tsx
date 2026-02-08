import { Button } from '@mui/material';
import { ButtonElementProps } from '@/components/lib/types/ui';

export default function BackButton({
  action,
  isDisabled,
  onClick,
}: ButtonElementProps) {
  return (
    <Button
      disabled={isDisabled}
      onClick={onClick}
      sx={{
        alignSelf: 'flex-end',
      }}
    >
      {action}
    </Button>
  );
}
