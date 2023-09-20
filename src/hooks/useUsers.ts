import { useQuery } from '@tanstack/react-query';
import { userService } from '@/services/user.service';

export const useUsers = () =>
  useQuery({
    queryKey: ['iam'],
    queryFn: userService.users,
    useErrorBoundary: true,
  });
