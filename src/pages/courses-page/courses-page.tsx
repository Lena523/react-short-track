import { Header, Courses } from '@/components';
import type { Handler } from '@/components/lib/types';

export default function CoursesPage({ handleLogOut }: Handler) {
  return (
    <>
      <Header handleLogOut={handleLogOut} />
      <Courses />
    </>
  );
}
