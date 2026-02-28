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
      fontFamily: 'Monteserrat',
    },
    h6: {
      fontSize: '1.7rem',
      fontWeight: 300,
      letterSpacing: '0.07em',
      fontFamily: 'Monteserrat',
    },
    subtitle1: {
      fontSize: '1.25rem',
      letterSpacing: '0em',
      fontWeight: 500,
      fontFamily: 'Monteserrat',
    },
    subtitle2: {
      fontSize: '1rem',
      letterSpacing: '0em',
      fontFamily: 'Monteserrat',
    },
    body1: {
      letterSpacing: '0em',
      fontFamily: 'Monteserrat',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0em',
      fontFamily: 'Monteserrat',
    },
    caption: {
      fontSize: '0.9em',
      fontWeight: 500,
      letterSpacing: '0em',
      fontFamily: 'Monteserrat',
    },
    button: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '0em',
      fontFamily: 'Monteserrat',
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
            fontFamily: 'Monteserrat',
            fontWeight: '500',
            fontSize: '20px',
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
            fontFamily: 'Monteserrat',
            fontWeight: '500',
            fontSize: '20px',
            '&:hover': { backgroundColor: '#313131' },
          },
        },

        {
          props: { variant: 'transparentButton' },
          style: {
            color: '#F65261',
            fontFamily: 'Monteserrat',
            fontWeight: '500',
            fontSize: '20px',
            backgroundColor: 'rgba(96, 96, 96, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(49, 49, 49, 0.5)',
            },
          },
        },

        {
          props: { variant: 'circledButton' },
          style: {
            color: '#F65261',
            backgroundColor: 'rgba(96, 96, 96, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(49, 49, 49, 0.5)',
            },
            borderRadius: '50%',
            minWidth: '50px !important',
            maxWidth: '50px',
            fontFamily: 'Monteserrat',
            fontWeight: '500',
            fontSize: '20px',
          },
        },
      ],
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
          padding: '40px 30px',
        },
      },
    },
  },
};
