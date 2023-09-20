import { Avatar, Badge, Drawer, Table } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { ProfileItem } from '../ProfileItem/ProfileItem';
import { Profile } from '@/types/types';

export const ProfilesTable = ({ profiles }: { profiles?: Profile[] }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const [selectedUser, setSelectedUser] = useState<null | {
    name: string;
    photo: string;
    link: string;
    score: number;
    skills: string[];
  }>(null);

  const handleSelectUser = (user: {
    name: string;
    photo: string;
    link: string;
    score: number;
    skills: string[];
  }) => {
    setSelectedUser(user);
    open();
  };

  const rows = profiles?.map((element) => (
    <Table.Tr key={element?.name} onClick={() => handleSelectUser(element)}>
      <Table.Td>
        {element?.photo.includes('http') ? (
          <Avatar src={element?.photo} alt="it's me" />
        ) : (
          <Avatar color="cyan" radius="xl">
            {element?.name?.slice(0, 2).toUpperCase()}
          </Avatar>
        )}
      </Table.Td>
      <Table.Td>{element?.name}</Table.Td>
      <Table.Td>{element?.link}</Table.Td>
      <Table.Td>{element?.score}</Table.Td>
      <Table.Td>
        {element?.skills.map((item) => (
          <Badge key={item} color="blue">
            {item}
          </Badge>
        ))}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Photo</Table.Th>
            <Table.Th> Name</Table.Th>
            <Table.Th>Link</Table.Th>
            <Table.Th>Score</Table.Th>
            <Table.Th>Skills</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <Drawer opened={opened} onClose={close} title="Details" size={400}>
        {selectedUser && <ProfileItem profile={selectedUser} />}
      </Drawer>
    </>
  );
};
