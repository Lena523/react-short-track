import { createSlice } from '@reduxjs/toolkit';
import type { LoginUserResponseProps } from '@/services/types/api-types';

const initialState: LoginUserResponseProps = {
  data: {
    id: 0,
    name: '',
    email: '',
    role: 'admin',
    token: '',
  },
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    admin: (state) => {
      state.data.role = 'admin';
    },
    user: (state) => {
      state.data.role = 'user';
    },
    unknown: (state) => {
      state.data.role = '';
    },
  },
});

export const { admin, user, unknown } = userSlice.actions;
export default userSlice.reducer;
