import type { LoginUserResponseProps } from '@/services/types/api-types';

export interface UserState {
  data: LoginUserResponseProps;
  isLoading: boolean;
  isInitialized: boolean;
}
