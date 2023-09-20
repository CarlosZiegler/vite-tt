import { apiClient } from '@/lib/apiClient';
import { Profile } from '@/types/types';

export const profiles = async (skills: string[]) => {
  // return apiClient.post<Profile[]>(
  //   '/users',
  //   {
  //     data: {
  //       skills: skills,
  //     },
  //   }
  // );

  const response = await apiClient.get<Profile[]>('/users');

  const elements = response?.data?.map((user: any) => ({
    photo: user.username as string,
    name: user.name as string,
    link: user.website as string,
    score: 0,
    skills: ['react', 'vue'],
  }));

  return elements;
};
export const profilesService = {
  profiles,
};
