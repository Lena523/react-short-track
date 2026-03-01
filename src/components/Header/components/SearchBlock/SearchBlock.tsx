import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useCheckLocation from '@/hooks/useCheckLocation';
import { textFieldSearchSx } from '@components/types/movies-types';
import { useSearchParams } from 'react-router';
import { useState } from 'react';

export default function SearcBlock() {
  const isHomePage = useCheckLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '');

  if (!isHomePage) {
    return null;
  }

  const handleSearch = () => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      search: inputValue,
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '60px' }}>
      <Typography variant="h1">FIND YOUR MOVIE</Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <TextField
          placeholder="What do you want to watch?"
          variant="outlined"
          sx={textFieldSearchSx}
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={handleSearch} variant="redButton">
          SEARCH
        </Button>
      </Box>
    </Box>
  );
}
