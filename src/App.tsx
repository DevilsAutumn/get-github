import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { PublicRoute } from '@routes';
import { Navbar, Footer, MainWrapper } from '@components';
import { store } from '@store';
import { theme } from '@theme';
import './axios/interceptor';

export const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <MainWrapper>
        <PublicRoute />
      </MainWrapper>
      <Footer />
    </ThemeProvider>
  </Provider>
);
