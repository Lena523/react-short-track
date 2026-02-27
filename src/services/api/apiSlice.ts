import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  LoginUser,
  RegisterUser,
  LoginUserResponseProps,
  GetUserProps,
} from '../types/api-types';
export type { LoginUserResponseProps };

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
    registerUser: builder.mutation<RegisterUser, string>({
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
