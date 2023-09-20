import { TagsInput, ComboboxItem, OptionsFilter, Badge, Stack, Container } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

export const SkillsInput = ({
  data,
  setSkills,
  skills,
}: {
  data: string[];
  skills: string[];
  setSkills: (data: string[]) => void;
}) => {
  return (
    <Stack w="350px">
      <TagsInput
        label="Skills"
        placeholder="Pick value or enter anything"
        data={data}
        filter={optionsFilter}
        onChange={setSkills}
        style={{ width: '80%' }}
      />
      <Container>
        {skills.map((item) => (
          <Badge key={item} color="blue" mr={5}>
            {item}
          </Badge>
        ))}
      </Container>
    </Stack>
  );
};
