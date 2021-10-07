
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Center from './Center';
import OrderSummary from './OrderSummary';
import Page from './Page';
import theme from './theme';

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
      <Page>
        <Center>
          <OrderSummary />
        </Center>
      </Page>
    </ThemeProvider>
  );
}

export default App;
