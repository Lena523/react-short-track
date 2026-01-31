import SearchInput from './search-input/search-input';
import SearchButton from './search-button/search-button';
import { Box } from '@mui/material';
import { SearchBarProps } from '@/components/lib/types';

export default function SearchBar({ onChange, onClick }: SearchBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <SearchInput
        isDisabled={false}
        onChange={onChange}
        placeholder={'search for the course'}
      />
      <SearchButton isDisabled={false} onClick={onClick} action={'SEARCH'} />
    </Box>
  );
}
