import { useMutation, useQuery } from '@tanstack/react-query';
import { profilesService } from '@/services/profileService';

export const useFindProfiles = () =>
  useMutation({
    mutationFn: (skills: string[]) => profilesService.profiles(skills),
  });
