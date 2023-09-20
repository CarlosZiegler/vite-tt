import { Profile } from '@/types/types';
import { Badge, Card, Image, Text, Button, Group } from '@mantine/core';

export const ProfileItem = ({ profile }: { profile: Profile }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={profile?.photo} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{profile?.name}</Text>
        {profile?.skills.map((item) => (
          <Badge key={item} color="blue">
            {item}
          </Badge>
        ))}
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
