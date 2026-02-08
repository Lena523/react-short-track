import { Typography } from '@mui/material';
import { TextElementProps } from '@/components/lib/types/ui';

export default function UserName({ text }: TextElementProps) {
  return <Typography variant="subtitle1">{text}</Typography>;
}
