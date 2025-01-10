import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import './Navbar.css';

const pages = ["Products", 'Cart', 'Login','SignUp'];


function Navbar({ onPageChange }) {

  return (
    <AppBar position="static" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">

        <Typography variant="h6" component="div" className="navbar-title">
          E-commerce Website
        </Typography>


        <Box className="navbar-links">
          {pages.map((page) => (
            <Button key={page} color="inherit" className="navbar-button" onClick={() => onPageChange(page)} >
              {page}
            </Button>
          ))}
        </Box>
        <Box className="navbar-avatar-container">
          <IconButton className="navbar-avatar-button" onClick={() => onPageChange('Profile')}>
            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
