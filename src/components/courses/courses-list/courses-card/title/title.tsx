import { Typography } from '@mui/material';
import { TextElementProps } from '@/components/lib/types';

export default function Title({ text }: TextElementProps) {
  return <Typography variant="h6">{text}</Typography>;
}
