import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  return (
    <CircularProgress
      size="3rem"
      color="success"
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    />
  );
}
