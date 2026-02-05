import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'medium',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          minWidth: 120,
          textTransform: 'none',
          borderRadius: 4,
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: 4,
            width: 'fullWidth',
          },
        },
        {
          props: { variant: 'square' },
          style: {
            borderRadius: 4,
            width: 40,
            height: 40,
            minWidth: 40,
            minHeight: 40,
            padding: 0,
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': { backgroundColor: '#1565c0' },
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 4,
          minWidth: 300,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    button: {
      fontWeight: 700,
    },
  },
});

export default theme;
