import { apiClient } from '@/lib/apiClient';
import { Profile } from '@/types/types';

export const users = async () => apiClient.get<Profile[]>('/users');
export const userService = {
  users,
};
