import { Box } from '@mui/material';
import { BasicChildrenProps } from '@/components/lib/types';
import Title from './course-info-title/course-info-title';
import BackButton from './back-button/back-button';

export default function CourseInfo({ children }: BasicChildrenProps) {
  return (
    <Box>
      <Title text={''} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          justifyItems: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          paddingTop: '50px',
        }}
      >
        {children}
      </Box>
      <BackButton
        action={'BACK'}
        onClick={() => console.log('')}
        isDisabled={false}
      />
    </Box>
  );
}
