import type { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(58,58,58,0.3)',
      light: '#171717',
      dark: 'rgba(32,32,32,0.8)',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#555555',
    },
    text: {
      secondary: '#f65261',
      disabled: 'rgba(255,255,255,0.7)',
    },
  },
  typography: {
    h1: {
      letterSpacing: '0.06em',
      fontSize: '2.5rem',
    },
    h6: {
      fontSize: '1.7rem',
      fontWeight: 300,
      letterSpacing: '0.07em',
    },
    subtitle1: {
      fontSize: '1.1rem',
      letterSpacing: '0em',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '1rem',
      letterSpacing: '0em',
    },
    body1: {
      letterSpacing: '0em',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    caption: {
      fontSize: '0.9em',
      fontWeight: 500,
      letterSpacing: '0em',
    },
    button: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 6,
          textTransform: 'none',
          padding: '8px 20px',
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '180px',
          },
        }),
      },
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        color: 'secondary',
      },
      variants: [
        {
          props: { variant: 'redButton' },
          style: {
            color: '#FFFFFF',
            backgroundColor: '#F65261',
            '&:hover': { backgroundColor: '#d44350' },
          },
        },
        {
          props: { variant: 'blackButton' },
          style: {
            border: '1px solid #F65261',
            color: '#F65261',
            backgroundColor: '#232323',
            '&:hover': { backgroundColor: '#313131' },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            backgroundColor: 'rgba(50, 50, 50, 0.95)',
            borderRadius: 4,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#232323',
          color: '#FFFFFF',
          padding: '2rem',
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
          backgroundColor: '#424242',
          padding: '30px',
        },
      },
    },
  },
};
