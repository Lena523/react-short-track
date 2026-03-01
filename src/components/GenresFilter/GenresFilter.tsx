import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useSearchParams } from 'react-router';

export default function GenresFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || 'ALL';

  const genres = ['ALL', 'ANIMATION', 'ADVENTURE', 'FANTASY', 'COMEDY', 'DRAMA', 'ROMANCE'];

  const handleGenre = (genre: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (genre === 'ALL') {
      newParams.delete('genre');
      console.log('После delete:', [...newParams]);
    } else {
      newParams.set('genre', genre);
    }

    setSearchParams(newParams);
  };

  console.log('Current genre param:', searchParams.get('genre'));

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
          onClick={() => handleGenre(genre)}
        >
          {genre}
        </Button>
      ))}
    </ButtonGroup>
  );
}
