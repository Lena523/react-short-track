import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  type LoginUser,
  type RegisterUser,
  type LoginUserResponseProps,
  type GetUserProps,
  type RegisterUserResponseProps,
  type ApiMoviesResponse,
  type MovieData,
  type MovieCreateApi,
} from '../api-types';
export type { LoginUserResponseProps };
import type { AppStartListening } from '@/services/api/listnerMiddleware';

export const sliceApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Movies'],
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
    getMovies: builder.query<ApiMoviesResponse, null>({
      query: () => ({
        url: 'movies',
        method: 'GET',
      }),
    }),
    createMovie: builder.mutation<MovieData, MovieCreateApi>({
      query: (initialPost) => ({
        url: 'movies',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Movies'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: newMovie } = await queryFulfilled;

          console.log('Сервер вернул:', newMovie);
          dispatch(
            sliceApi.util.updateQueryData('getMovies', null, (draft) => {
              draft.data.push(newMovie);
            }),
          );
        } catch (error) {
          console.error('Failed to update cache:', error);
        }
      },
    }),
    editMovie: builder.mutation<MovieData, MovieData>({
      query: (initialPost) => ({
        url: `movies/${initialPost.id}`,
        method: 'PUT',
        body: initialPost,
      }),
      invalidatesTags: ['Movies'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: newMovie } = await queryFulfilled;

          dispatch(
            sliceApi.util.updateQueryData('getMovies', null, (draft) => {
              const index = draft.data.findIndex((movie) => movie.id === newMovie.id);

              if (index !== -1) {
                draft.data[index] = newMovie;
              }
            }),
          );
        } catch (error) {
          console.error('Failed to update cache:', error);
        }
      },
    }),
    getMovieById: builder.query<{ data: MovieData }, number>({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useRegisterUserMutation,
  useGetCurrentUserMutation,
  useGetMoviesQuery,
  useCreateMovieMutation,
  useGetMovieByIdQuery,
  useEditMovieMutation,
} = sliceApi;

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

  startAppListening({
    matcher: sliceApi.endpoints.getMovies.matchRejected,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('Failed to load some movies posters', {
        variant: 'warning',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.createMovie.matchRejected,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('Failed to create a movie', {
        variant: 'danger',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.createMovie.matchFulfilled,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('The movie has been added to database successfully', {
        variant: 'success',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.editMovie.matchFulfilled,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('The movie has been edited successfully', {
        variant: 'success',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });

  startAppListening({
    matcher: sliceApi.endpoints.editMovie.matchRejected,
    effect: async (_action, listnerApi) => {
      const { toast } = await import('react-tiny-toast');
      const toastId = toast.show('Failed to edit movie', {
        variant: 'danger',
        position: 'bottom-right',
        pause: true,
      });

      await listnerApi.delay(5000);
      toast.remove(toastId);
    },
  });
};
