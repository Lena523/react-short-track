import SearchInput from './search-input/search-input';
import SearchButton from './search-button/search-button';
import { Box } from '@mui/material';
import { SearchBarProps } from '@/components/lib/types/ui';

export default function SearchBar({ onChange, onClick }: SearchBarProps) {
  return (
    <Box
      sx={{
        display: { xs: 'grid', sm: 'flex' },
        gridTemplateColumns: { xs: '1fr', sm: 'auto auto' },
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <SearchInput
        isDisabled={false}
        onChange={onChange}
        placeholder="search for the course"
      />
      <SearchButton isDisabled={false} onClick={onClick} action="SEARCH" />
    </Box>
  );
}
