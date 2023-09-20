import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { AppProvider } from './providers/AppProvider';
import { Toaster, toast } from 'sonner';

export default function App() {
  return (
    <AppProvider>
      <MantineProvider theme={theme}>
        <Router />
        <Toaster />
      </MantineProvider>
    </AppProvider>
  );
}
