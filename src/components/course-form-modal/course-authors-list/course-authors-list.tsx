import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CourseAuthorsList({
  courseAuthors,
  onDeleteActiveAuthor,
}: {
  courseAuthors: string[];
  onDeleteActiveAuthor: (item: string) => void;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '10px',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontSize: '1.1em', fontWeight: '700', textAlign: 'center' }}
      >
        Course Authors
      </Typography>
      <List>
        {courseAuthors.map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDeleteActiveAuthor(item)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={item}
              slotProps={{
                primary: {
                  sx: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'block',
                    maxWidth: 200,
                  },
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
