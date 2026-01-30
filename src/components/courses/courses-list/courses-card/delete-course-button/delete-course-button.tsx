import { Button, Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ButtonElementProps } from '@/components/lib/types';

export default function DeleteCourseButton({
  isDisabled,
  onClick,
}: Omit<ButtonElementProps, 'action'>) {
  return (
    <Box>
      <Button variant="square" disabled={isDisabled} onClick={onClick}>
        <DeleteOutlineOutlinedIcon color="inherit" />
      </Button>
    </Box>
  );
}
