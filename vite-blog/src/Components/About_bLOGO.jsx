import React from 'react';
import { Box, Typography } from '@mui/material';

const About_bLOGO = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: 4,
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        About bLOGO
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: 'white',
          textAlign: 'center',
          maxWidth: 600,
        }}
      >
        Welcome to bLOGO! Here you can create your own beautiful blog and share your thoughts with the world. Enjoy writing!
      </Typography>
    </Box>
  );
};

export default About_bLOGO;
