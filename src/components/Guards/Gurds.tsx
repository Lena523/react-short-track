import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';
import type { RootState } from '@/store/store';

export const UserRoute = () => {
  const role = useSelector((state: RootState) => state.user.data?.role);
  const hasAccess = role === 'user' || role === 'admin';

  return hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoute = () => {
  const role = useSelector((state: RootState) => state.user.data?.role);

  return role === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export const LoginRoute = () => {
  const role = useSelector((state: RootState) => state.user.data?.role);

  return role === 'unknown' ? <Outlet /> : <Navigate to="/" replace />;
};
