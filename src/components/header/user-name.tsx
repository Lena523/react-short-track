import { Typography } from '@mui/material';
import { TextElementProps } from '../lib/types';

export default function UserName({ text }: TextElementProps) {
  return <Typography variant="subtitle1">{text}</Typography>;
}
