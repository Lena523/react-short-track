import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CourseAuthorsList() {
  const list: string[] = ['Your list is emptffffffy'];
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
        {list.map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => console.log('', item)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={item} sx={{ whiteSpace: 'nowrap' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
