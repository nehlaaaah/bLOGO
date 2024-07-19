import axios from 'axios';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Write.css';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      const response = await axios.post('http://localhost:5000/blogs', {
        title,
        content,
      }, {
        headers: {
          Authorization: token,
        },
      });
      console.log('Blog posted:', response.data);
      alert("Blog posted Suceessfully")
      // Optionally, navigate to the blog list page or clear the form
    } catch (error) {
      console.error('Error posting blog:', error.response.data.message);
    }
  };

  return (
    <Box className="write-container">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1">
          Write a New Blog
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" className="submit-button">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Write;
