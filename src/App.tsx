import { ThemeProvider } from '@emotion/react';
import './App.css';
import { Layout } from './components';
import { Routing } from './navigation/Routing';
import { theme } from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routing />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
