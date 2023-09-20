import { Stack } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useUsers } from '@/hooks/useUsers';

export function HomePage() {
  const { data: response, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <Stack ta="center">
      <Welcome />
      <ColorSchemeToggle />
      <div>{response && response.data?.map((user) => <div key={user.name}>{user.name}</div>)}</div>
    </Stack>
  );
}
