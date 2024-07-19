import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, CircularProgress, Snackbar } from '@mui/material';
import Blog from './Blog';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs');
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>All Blogs</Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Snackbar open autoHideDuration={6000} message={`Error: ${error}`} />
      ) : (
        <Grid container spacing={4}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog._id}>
                <Blog
                  title={blog.title}
                  author={blog.author}
                  content={blog.content}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No blogs available</Typography>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default BlogsPage;
