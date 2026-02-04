import { TextField } from '@mui/material';
import { InputElementProps } from '@/components/lib/types';

export default function LoginInput({ ...rest }: InputElementProps) {
  return (
    <TextField
      label={rest.label}
      disabled={rest.isDisabled}
      onChange={rest.onChange}
      type={rest.type}
      name={rest.name}
    />
  );
}
