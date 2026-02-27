import { Outlet, Navigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { useAuthInitialization } from '@/hooks/useAuthInitialization';
import Spinner from '@components/common/Spinner/Spinner';

export const UserRoute = () => {
  const { isLoading, isAuthenticated } = useAuthInitialization();
  const role = useAppSelector((state) => state.user.role);
  const hasAccess = role === 'user' || role === 'admin';

  if (isLoading) return <Spinner />;

  return isAuthenticated && hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoute = () => {
  const { isLoading } = useAuthInitialization();
  const role = useAppSelector((state) => state.user.role);

  if (isLoading) return <Spinner />;

  return role === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export const LoginRoute = () => {
  const { isLoading, isAuthenticated } = useAuthInitialization();
  const role = useAppSelector((state) => state.user.role);

  if (isLoading) return <Spinner />;

  return !isAuthenticated && role === 'unknown' ? <Outlet /> : <Navigate to="/" replace />;
};
