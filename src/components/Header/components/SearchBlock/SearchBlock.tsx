import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useCheckLocation from '@/hooks/useCheckLocation';

export default function SearcBlock() {
  const isHomePage = useCheckLocation();

  if (!isHomePage) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '60px' }}>
      <Typography variant="h1">FIND YOUR MOVIE</Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <TextField
          placeholder="What do you want to watch?"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              background:
                'linear-gradient(135deg, rgba(70, 70, 70, 0.95) 0%, rgba(40, 40, 40, 0.98) 100%)',
              borderRadius: '4px',
              backdropFilter: 'blur(2px)',
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: '#F65261',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#F65261',
              },
            },
            '& .MuiInputBase-input': {
              padding: '16px 22px',
              fontSize: '1.2rem',
              fontWeight: 400,
              letterSpacing: '0.3px',
              color: '#ffffff',
              '&::placeholder': {
                color: 'rgba(200, 200, 200, 0.7)',
                opacity: 1,
                fontWeight: 300,
                fontSize: '1.1rem',
              },
            },
          }}
          fullWidth
        />
        <Button variant="redButton">SEARCH</Button>
      </Box>
    </Box>
  );
}
