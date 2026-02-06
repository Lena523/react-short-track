import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function CourseAuthorsList() {
  const list: string[] = ['Your list is emptyjjjjjjj'];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '10px',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontSize: '1.1em', fontWeight: '700' }}
      >
        Course Authors
      </Typography>
      <List sx={{ textAlign: 'left' }}>
        {list.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} sx={{ whiteSpace: 'nowrap' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
