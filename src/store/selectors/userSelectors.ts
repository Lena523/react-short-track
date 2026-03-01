import type { UserState } from '@store/store-types';

export const selectUserRole = (state: { user: UserState }) => state.user.role;
export const selectUserIsLoading = (state: { user: UserState }) => state.user.isLoading;
export const selectUserIsInitialized = (state: { user: UserState }) => state.user.isInitialized;
export const selectUserName = (state: { user: UserState }) => state.user.name;
export const selectUser = (state: { user: UserState }) => state.user;
