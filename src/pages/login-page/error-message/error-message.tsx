import { Typography } from '@mui/material';
import { ErrorMessageProps } from '@/components/lib/types';

export default function ErrorMessage({ textMessage }: ErrorMessageProps) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: '#FF0000',
      }}
    >
      {textMessage}
    </Typography>
  );
}
