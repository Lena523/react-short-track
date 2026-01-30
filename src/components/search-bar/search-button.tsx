import { Button } from '@mui/material';
import type { ButtonElementProps } from '../lib/types';

export default function SearchButton({
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
