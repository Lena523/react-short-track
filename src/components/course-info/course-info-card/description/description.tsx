import { Typography, Box } from '@mui/material';
import { TextElementProps } from '@/components/lib/types';

export default function Description({ text }: TextElementProps) {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.9em',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
