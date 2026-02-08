import { Button, Box } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { ButtonElementProps } from '@/components/lib/types';

export default function EditCourseButton({
  isDisabled,
  onClick,
}: Omit<ButtonElementProps, 'action'>) {
  return (
    <Box>
      <Button variant="square" disabled={isDisabled} onClick={onClick}>
        <ModeEditOutlineOutlinedIcon color="inherit" />
      </Button>
    </Box>
  );
}
