import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Next.css';

const buttonStyle = {
  width: '150px',
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

const Next = () => {
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'rgba(221, 160, 221, 0.8)',
            boxShadow: 'none',
          }}
        >
          <Toolbar> */}
            {/* <img
              src="https://cdn-icons-png.freepik.com/256/9507/9507492.png?semt=ais_hybrid"
              alt="Logo Icon"
              className="logo-icon"
            /> */}
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              bLOGO
            </Typography> */}
            {/* <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
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
                to="/contact"
                sx={buttonStyle}
              >
                Contact
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
                to="/write"
                sx={buttonStyle}
              >
                Write
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={buttonStyle}
              >
                Logout
              </Button>
            </Box> */}
          {/* </Toolbar>
        </AppBar> */}
      {/* </Box> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: 'black',
          padding: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            marginBottom: 4,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Welcome to bLOGO
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/write"
          sx={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: 'rgba(221, 160, 221, 0.8)',
            color: 'black',
            '&:hover': {
              backgroundColor: '#333',
            },
            '&:active': {
              backgroundColor: 'rgba(221, 160, 221, 0.8)',
            },
            transition: 'background-color 0.3s ease',
            textTransform: 'lowercase',
            width: '200px',
            marginBottom: '20px',
          }}
        >
          Start a Blog
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/view-blogs"
          sx={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: 'rgba(221, 160, 221, 0.8)',
            color: 'black',
            '&:hover': {
              backgroundColor: '#333',
            },
            '&:active': {
              backgroundColor: 'rgba(221, 160, 221, 0.8)',
            },
            transition: 'background-color 0.3s ease',
            textTransform: 'lowercase',
            width: '200px',
          }}
        >
          View Blogs
        </Button>
      </Box>
    </div>
  );
};

export default Next;
