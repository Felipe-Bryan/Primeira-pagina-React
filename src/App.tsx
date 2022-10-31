import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import theme from './config/theme/theme';
import { ThemeProvider } from 'styled-components';
import AppStyled from './components/AppStyled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled mode="light">
        <AppRoutes />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
