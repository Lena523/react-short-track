import { Typography } from '@mui/material';
import { TextElementProps } from '@/components/lib/types';

export default function Description({ text }: TextElementProps) {
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: '0.9em',
      }}
    >
      {text}
    </Typography>
  );
}
