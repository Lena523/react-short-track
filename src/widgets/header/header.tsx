import Box from '@mui/material/Box';
import ButtonElement from '../../components/button/button-element';
import TextElement from '../../components/text-element/text-element';

export default function Header() {
  return (
    <Box
      component={'header'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: 'white',
      }}
    >
      <img src="/course.svg"></img>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <TextElement text={'Harry Potter'}></TextElement>
        <ButtonElement
          isActive={false}
          onClick={() => console.log('clicked')}
          action={'LOGOUT'}
        />
      </Box>
    </Box>
  );
}
