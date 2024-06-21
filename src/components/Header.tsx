import { Box } from '@mui/material';
import stackline from '../../public/stackline_logo.svg';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingLeft: '2em',
        paddingRight: '2em',
        width: '100%',
        height: '4em',
        backgroundColor: '#062A49',
      }}
    >
      <img src={stackline} alt="mainLogo" style={{ maxWidth: '10em' }} />
    </Box>
  );
}
