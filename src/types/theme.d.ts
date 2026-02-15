import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    redButton: true;
    blackButton: true;
  }
}
