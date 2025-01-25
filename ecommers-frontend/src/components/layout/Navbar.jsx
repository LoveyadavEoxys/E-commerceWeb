import React, { useCallback, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import producdata from '../../assets/products/product.json';
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const role = useSelector((state) => state.user.userDetail.role); 
  const userAvatar = "https://cdn-icons-png.flaticon.com/512/219/219983.png";
  const [searchTerm, setSearchTerm]= useState("");

 
  const pages = (role === 'Seller') 
    ? ['Inventory Management', 'About Us', 'Contact Us'] 
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
  const handleSearch =()=>{
    const result = producdata.filter(product=> product.name.toLowerCase().includes(searchTerm));
      navigate('/SearchResultPage',{state : result});
   
  
  
  }

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
        
        <Box className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button onClick={handleSearch}>🔍</button>
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
