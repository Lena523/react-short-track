import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useGetCurrentUserMutation } from '@/services/api/apiSlice';
import { setUserData, setUnknown } from '@/store/slices/userSlice';

export const useAuthInitialization = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('userToken');
  const initialized = useRef(false);

  const { role, id } = useAppSelector((state) => state.user);
  const hasUserData = id !== 0 && role !== 'unknown';

  const [getCurrentUser, { isLoading }] = useGetCurrentUserMutation();

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || initialized.current || hasUserData) {
        return;
      }

      try {
        const currentUser = await getCurrentUser({ token: token }).unwrap();

        if (currentUser?.data) {
          initialized.current = true;
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
        initialized.current = true;

        if (error && typeof error === 'object' && 'status' in error) {
          if (error.status === 401) {
            localStorage.removeItem('userToken');
          }
        }

        dispatch(setUnknown());
      }
    };

    fetchUser();
  }, [token]);

  const showLoading = token && isLoading && !hasUserData;

  return {
    isLoading: showLoading,
    isAuthenticated: hasUserData,
    role,
  };
};
