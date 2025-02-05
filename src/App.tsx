import { ThemeProvider } from '@emotion/react';
import './App.css';
import { Routing } from './navigation/Routing';
import { theme } from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
