import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import AppRouter from 'components/root/AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
);

export default App;
