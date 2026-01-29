import Typography from '@mui/material/Typography';
import { TextElementProps } from '../lib/types';

export default function TextElement({ text }: TextElementProps) {
  return <Typography variant="subtitle1">{text}</Typography>;
}
