import { useLocation } from 'react-router';

export default function useCheckLocation() {
  const location = useLocation();

  return location.pathname === '/';
}
