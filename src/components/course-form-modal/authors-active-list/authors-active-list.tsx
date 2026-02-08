import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AuthorsActiveListProps } from '@/components/lib/types/domain';

export default function AuthorsActiveList({
  authors,
  onAddCourseAuthor,
}: AuthorsActiveListProps) {
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
                  onClick={() => onAddCourseAuthor(item)}
                >
                  <AddIcon />
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
