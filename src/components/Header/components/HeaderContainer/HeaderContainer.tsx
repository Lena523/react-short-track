import Box from '@mui/material/Box';
import type { HeaderContainerProps } from '@components/types/header-types';

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '396px',
        padding: '20px 50px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(Bitmap2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(Bitmap1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        '& .overlay': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        },
      }}
    >
      <Box className="overlay" />
      <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
    </Box>
  );
}
