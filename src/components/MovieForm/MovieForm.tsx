import GenresFilter from '@components/GenresFilter/GenresFilter';
import Box from '@mui/material/Box';
import MovieCount from '@components/MoviesList/components/MovieCount/MovieCount';
import MovieTile from '@components/MoviesList/components/MovieTile/MovieTile';

export default function MovieForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <GenresFilter />
      <MovieCount />
      <MovieTile />
    </Box>
  );
}
