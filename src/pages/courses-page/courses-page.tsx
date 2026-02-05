import { Header, Courses } from '@/components';
import type { LoginProps } from '@/components/lib/types';

export default function CoursesPage({
  onLogout,
}: Pick<LoginProps, 'onLogout'>) {
  return (
    <>
      <Header onLogout={onLogout} />
      <Courses />
    </>
  );
}
