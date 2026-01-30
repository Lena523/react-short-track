import SearchInput from './search-input';
import SearchButton from './search-button';
import { Box } from '@mui/material';

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <SearchInput
        isDisabled={false}
        onChange={() => console.log('')}
        placeholder={'search for the course'}
      />
      <SearchButton
        isDisabled={false}
        onClick={() => console.log('')}
        action={'Search'}
      />
    </Box>
  );
}
