import { Typography } from '@mui/material';
import { TextElementProps } from '@/components/lib/types';

export default function Title({ text }: TextElementProps) {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: '700',
        marginBottom: '5px',
      }}
    >
      {text}
    </Typography>
  );
}
