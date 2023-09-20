// import { apiClient } from '../lib/apiClient';

import { apiClient } from '@/lib/apiClient';

export const users = async () => apiClient.get<{ name: string }[]>('/users');

export const userService = {
  users,
};
