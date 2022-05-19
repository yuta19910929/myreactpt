import { ThemeProvider, createTheme, styled } from '@mui/material';

export const Theme = createTheme({
  palette: {
    // シアン
    cyan: {
      main: '#00ffff',
      contrastText: '#000',
    },
    lightcyan: {
      main: '#e0ffff',
      contrastText: '#000',
    },
    gray: {
      light: '#dcdcdc',
      main: '#808080',
      dim: '#696969',
      contrastText: '#fff',
    },
  },
});
