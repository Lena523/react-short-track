import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserState } from '@/store/store-types';

const initialState: UserState = {
  id: 0,
  name: '',
  email: '',
  role: 'unknown',
  isLoading: false,
  isInitialized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdmin: (state) => {
      state.role = 'admin';
    },
    setUser: (state) => {
      state.role = 'user';
    },
    setUnknown: (state) => {
      state.role = 'unknown';
      state.isInitialized = true;
      state.isLoading = false;
    },
    setUserData: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
      state.isInitialized = true;
      state.isLoading = false;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearUserData: (state) => {
      Object.assign(state, initialState, { isInitialized: true });
    },
  },
});

export const { setAdmin, setUser, setUnknown, setUserData, setUserLoading, clearUserData } =
  userSlice.actions;
export default userSlice.reducer;
