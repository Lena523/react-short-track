import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@store/slices/userSlice';
import { sliceApi } from '@/services/api/apiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [sliceApi.reducerPath]: sliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sliceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
