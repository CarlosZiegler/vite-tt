import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { AppProvider } from './providers/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </AppProvider>
  );
}
