import { Outlet, Navigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import Spinner from '@/components/common/Spinner/Spinner';
import { selectUser } from '@/store/selectors/userSelectors';

export const UserRoute = () => {
  const { role, isLoading, isInitialized } = useAppSelector(selectUser);
  const token = localStorage.getItem('userToken');

  const isAuthenticated = role !== 'unknown';
  const hasAccess = role === 'user' || role === 'admin';

  if (!token) return <Navigate to="/login" replace />;

  if (!isInitialized || isLoading) return <Spinner />;

  return isAuthenticated && hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoute = () => {
  const { role, isLoading, isInitialized } = useAppSelector((state) => state.user);
  const token = localStorage.getItem('userToken');

  if (!token) return <Navigate to="/login" replace />;

  if (!isInitialized || isLoading) return <Spinner />;

  return role === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export const LoginRoute = () => {
  const { role, isLoading, isInitialized } = useAppSelector((state) => state.user);
  const token = localStorage.getItem('userToken');

  if (token && isInitialized && !isLoading) {
    if (role !== 'unknown') return <Navigate to="/" replace />;
  }

  if (!isInitialized || isLoading) return <Spinner />;

  return <Outlet />;
};
