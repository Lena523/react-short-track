import { TextField } from '@mui/material';
import type { InputElementProps } from '@/components/lib/types';

export default function SearchInput({
  isDisabled,
  onChange,
  placeholder,
}: InputElementProps) {
  return (
    <TextField
      id="outlined-basic"
      size="small"
      variant="outlined"
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        minWidth: '300px',
      }}
    />
  );
}
