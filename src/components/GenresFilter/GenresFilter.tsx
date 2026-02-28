import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function GenresFilter() {
  const [activeGenre, setActiveGenre] = useState('ALL');

  const genres = ['ALL', 'DOCUMENTARY', 'HORROR', 'CRIME', 'COMEDY', 'DRAMA', 'ROMANCE'];

  return (
    <ButtonGroup sx={{ color: '#FFFFFF' }} variant="text" aria-label="Basic button group">
      {genres.map((genre) => (
        <Button
          key={genre}
          sx={{
            color: '#FFFFFF',
            fontFamily: 'Monserrat',
            fontSize: '1em',
            '&.MuiButton-root': {
              borderBottom: activeGenre === genre ? '2px solid #F65261' : '2px solid transparent',
            },
            borderRadius: 0,
          }}
          onClick={() => setActiveGenre(genre)}
        >
          {genre}
        </Button>
      ))}
    </ButtonGroup>
  );
}
