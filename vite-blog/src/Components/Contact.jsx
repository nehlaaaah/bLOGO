import React, { useState } from 'react';
import { Box, Typography, Button, Modal, Card, CardContent } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        Contact Us
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          marginBottom: 4,
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: 'rgba(221, 160, 221, 0.8)',
          color: 'black',
          '&:hover': {
            backgroundColor: '#333',
          },
          '&:active': {
            backgroundColor: 'rgba(221, 160, 221, 0.8)',
          },
          transition: 'background-color 0.3s ease',
          textTransform: 'uppercase',
        }}
      >
        Show Contact Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6" id="modal-title" component="h2">
                Contact Details
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                Email: <strong>blogo2.0@gmail.com</strong>
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Edition: <strong>2024 Edition</strong>
              </Typography>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  marginTop: 2,
                  padding: '10px 20px',
                  fontSize: '1rem',
                  backgroundColor: 'rgba(221, 160, 221, 0.8)',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                  '&:active': {
                    backgroundColor: 'rgba(221, 160, 221, 0.8)',
                  },
                  transition: 'background-color 0.3s ease',
                  textTransform: 'uppercase',
                  width: '100%',
                }}
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
