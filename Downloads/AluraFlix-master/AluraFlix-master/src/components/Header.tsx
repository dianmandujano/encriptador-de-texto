import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenNewVideo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewVideo }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'black'}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: 40, fontWeight: 'bold', color: 'rgb(204, 27, 27)', textAlign: 'center', fontFamily: 'Arial', letterSpacing: 2}}>       
          Aluraflix
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" onClick={onOpenNewVideo}>
            Nuevo Video
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
