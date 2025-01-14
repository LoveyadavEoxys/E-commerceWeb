import React, { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const role = useSelector((state) => state.user.userDetail.role); 
  const userAvatar = "/static/images/avatar/2.jpg";

 
  const pages = role === 'admin'
    ? [ 'Update Product', 'Add Product','About Us', 'Contact Us']
    : ['Products', 'Cart', 'About Us', 'Contact Us'];

  const onPageChange = useCallback((page) => {
    navigate(`/${page}`);
  }, [navigate]);

  const profileHandler = useCallback(() => {
    if (isLogin) {
      navigate('/Profile');
    } else {
      navigate('/Login');
    }
  }, [isLogin, navigate]);

  return (
    <AppBar position="static" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Typography variant="h6" component="div" className="navbar-title">
          E-commerce Website
        </Typography>

        <Box className="navbar-links">
          {pages.map((page) => (
            <Button
              key={page}
              color="inherit"
              className="navbar-button"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box className="navbar-avatar-container">
          <IconButton className="navbar-avatar-button" onClick={profileHandler}>
            <Avatar alt="User Avatar" src={userAvatar} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
