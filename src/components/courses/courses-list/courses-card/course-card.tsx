import { Box } from '@mui/material';
import Title from './title/title';
import { CourseCardProps } from '@/components/lib/types';

export default function CourseCard({ title }: CourseCardProps) {
  return (
    <Box>
      <Title text={title} />
    </Box>
  );
}
