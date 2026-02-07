import { Header, Courses } from '@/components';
import type { LoginProps } from '@/components/lib/types';

export default function CoursesPage({
  onLogout,
  userName,
}: Pick<LoginProps, 'onLogout'> & { userName: string }) {
  return (
    <>
      <Header onLogout={onLogout} isVisible={true} user={userName} />
      <Courses />
    </>
  );
}
