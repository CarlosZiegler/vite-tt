import { useCallback, useState } from 'react';
import { Button, Container, Group, LoadingOverlay, Stack } from '@mantine/core';

import { SkillsInput } from '@/components/SkillsInput/SkillsInput';
import { ProfilesTable } from '@/components/ProfileTable/ProfileTable';
import { useFindProfiles } from '@/hooks/userProfiles';

export function HomePage() {
  const { data: profilesResponse, mutate, isLoading: isProfilesLoading, error } = useFindProfiles();
  const [skills, setSkills] = useState<string[]>([]);

  const handleOnClick = useCallback(() => {
    mutate(skills);
  }, [skills]);

  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <Stack ta="center">
      {/* <ColorSchemeToggle /> */}
      <LoadingOverlay
        visible={isProfilesLoading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
      />
      <Container>
        <Group
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <SkillsInput
            data={['React', 'Angular', 'Svelte']}
            setSkills={setSkills}
            skills={skills}
          />
          <Button onClick={handleOnClick}>Find</Button>
        </Group>
        <ProfilesTable profiles={profilesResponse} />
      </Container>
    </Stack>
  );
}
