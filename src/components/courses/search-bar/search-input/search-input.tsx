import { TextField } from '@mui/material';
import type { InputElementProps } from '@/components/lib/types';

export default function SearchInput({
  isDisabled,
  onChange,
  placeholder,
}: InputElementProps) {
  return (
    <TextField
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={(e) => onChange(e)}
    />
  );
}
