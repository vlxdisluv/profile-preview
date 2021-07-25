import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Router from './Router';
import defaultTheme from './themes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
