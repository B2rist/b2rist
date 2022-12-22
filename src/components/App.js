import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import AuthenticationProvider from 'components/AuthenticationProvider';
import { Provider } from 'react-redux';
import store from 'store';

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
    <Provider store={store}>
      <AuthenticationProvider />
    </Provider>
  </ThemeProvider>
);

export default App;
