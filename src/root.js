import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core';
import AuthProvider from 'contexts/auth';
import OrderProvider from 'contexts/order';
import App from './app';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

console.log(theme);

function Root () {
  return (
    <MuiThemeProvider theme={ theme } >
      <ThemeProvider theme={ theme } >
        <AuthProvider>
          <OrderProvider>
            <CssBaseline />

            <GlobalStyle />

            <BrowserRouter>
              <Route component={ App } />
            </BrowserRouter>
          </OrderProvider>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default Root;
