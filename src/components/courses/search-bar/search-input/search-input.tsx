import { TextField } from '@mui/material';
import type { InputElementProps } from '@/components/lib/types/ui';

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
