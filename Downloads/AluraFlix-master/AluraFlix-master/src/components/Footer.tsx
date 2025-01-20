import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box style={{ backgroundColor: '#040C2A' }} sx={{ bgcolor: 'primary.main', color: 'rgb(248, 212, 8)', padding: 2, textAlign: 'center', position: 'fixed', bottom: 0, width: '100%', fontSize: 20, fontWeight: 'bold', fontFamily: 'Arial', letterSpacing: 2 }}>        
    <Typography variant="body2" style={{fontSize:20}}>Desarrollado por Diana Itzel Mandujano</Typography>
  </Box>
);

export default Footer;
