import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AuthorsActiveList() {
  const list: string[] = ['Valeriy Dubkin', 'Maksim Bard'];
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: '700',
        }}
      >
        Authors List
      </Typography>
      <List>
        {list?.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="add"
                  onClick={() => console.log('', item)}
                >
                  <AddIcon />
                </IconButton>
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
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
