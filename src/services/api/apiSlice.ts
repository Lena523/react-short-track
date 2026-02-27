import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  LoginUser,
  RegisterUser,
  LoginUserResponseProps,
  GetUserProps,
  RegisterUserResponseProps,
} from '../types/api-types';
export type { LoginUserResponseProps };
import type { AppStartListening } from '@/services/api/listnerMiddleware';

export const sliceApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getUser: builder.mutation<LoginUserResponseProps, LoginUser>({
      query: (initialPost) => ({
        url: 'me/login',
        method: 'POST',
        body: initialPost,
      }),
    }),
    registerUser: builder.mutation<RegisterUserResponseProps, RegisterUser>({
      query: (initialPost) => ({
        url: 'me/register',
        method: 'POST',
        body: initialPost,
      }),
    }),
    getCurrentUser: builder.mutation<LoginUserResponseProps, GetUserProps>({
      query: (initialPost) => ({
        url: 'me/user',
        method: 'POST',
        body: initialPost,
      }),
    }),
  }),
});

export const { useGetUserMutation, useRegisterUserMutation, useGetCurrentUserMutation } = sliceApi;

export const addUserListners = (startAppListening: AppStartListening) => {
  startAppListening({
    matcher: sliceApi.endpoints.getUser.matchFulfilled,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('Login is successful', {
        variant: 'success',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.getUser.matchRejected,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('Register, please: ', {
        variant: 'warning',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.registerUser.matchFulfilled,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('Login please', {
        variant: 'success',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.registerUser.matchRejected,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('You are registered, login please', {
        variant: 'warning',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });
};
