import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure you have this CSS file

const buttonStyle = {
  width: '120px', // Set a fixed width for buttons
  margin: '0 8px', // Space between buttons
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:focus': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:active': {
    backgroundColor: 'black',
    color: 'white',
  },
};

const Navbar1 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(221, 160, 221, 0.8)', // Lilac color with transparency
          boxShadow: 'none', // Remove shadow
          padding: '0 16px', // Add horizontal padding
        }}
      >
        <Toolbar>
          <img
            src="https://cdn-icons-png.freepik.com/256/9507/9507492.png?semt=ais_hybrid"
            alt="Logo Icon"
            className="logo-icon"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            bLOGO
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={buttonStyle}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/write"
              sx={buttonStyle}
            >
              Write
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={buttonStyle}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={buttonStyle}
            >
              Contact
            </Button>
            {/* <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={buttonStyle}
            >
             Logout
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar1;
