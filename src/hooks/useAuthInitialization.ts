import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useGetCurrentUserMutation } from '@/services/api/apiSlice';
import { setUserData, setUnknown, setUserLoading } from '@/store/slices/userSlice';

export const useAuthInitialization = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('userToken');

  const {
    role,
    id,
    isLoading: storeLoading,
    isInitialized,
  } = useAppSelector((state) => state.user);
  const [getCurrentUser] = useGetCurrentUserMutation();

  useEffect(() => {
    if (isInitialized) return;

    const fetchUser = async () => {
      dispatch(setUserLoading(true));

      if (!token) {
        dispatch(setUnknown());

        return;
      }

      try {
        const currentUser = await getCurrentUser({ token }).unwrap();

        if (currentUser?.data) {
          dispatch(
            setUserData({
              id: currentUser.data.id,
              name: currentUser.data.name,
              email: currentUser.data.email,
              role: currentUser.data.role,
            }),
          );
        }
      } catch (error) {
        console.error('Error', error);

        if (error && typeof error === 'object' && 'status' in error) {
          if (error.status === 401) {
            localStorage.removeItem('userToken');
          }
        }

        dispatch(setUnknown());
      }
    };

    fetchUser();
  }, [token, isInitialized]);

  const isLoading = !isInitialized || (token ? storeLoading : false);

  return {
    isLoading,
    isAuthenticated: id !== 0 && role !== 'unknown',
    role,
  };
};
