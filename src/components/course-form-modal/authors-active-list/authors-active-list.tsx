import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AuthorsActiveList({ authors }: { authors: string[] }) {
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
        {authors.map((item, index) => (
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
