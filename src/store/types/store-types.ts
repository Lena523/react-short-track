export interface UserState {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'unknown';
  isLoading: boolean;
  isInitialized: boolean;
}
