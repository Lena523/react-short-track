import GenresFilter from '@components/GenresFilter/GenresFilter';
import Box from '@mui/material/Box';
import MovieCount from '@components/MoviesList/components/MovieCount/MovieCount';
import MovieList from '@components/MoviesList/MovieList';

export default function MovieContainer() {
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
      <MovieList />
    </Box>
  );
}
