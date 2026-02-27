import { Outlet, Navigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';

export const UserRoute = () => {
  const role = useAppSelector((state) => state.user.role);
  const hasAccess = role === 'user' || role === 'admin';

  return hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoute = () => {
  const role = useAppSelector((state) => state.user.role);

  return role === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export const LoginRoute = () => {
  const role = useAppSelector((state) => state.user.role);

  return role === 'unknown' ? <Outlet /> : <Navigate to="/" replace />;
};
