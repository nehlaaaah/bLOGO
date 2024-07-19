// ViewBlogs.jsx
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ViewBlog.css';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs');
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.error('Error: Response data is not an array', response.data);
          setBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="view-blogs-background">
      <Container style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}>
        <Typography variant="h2" component="h1" gutterBottom className="posted-blogs-title">
          Posted Blogs
        </Typography>
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h5" component="h2">{blog.blogName}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Author:</strong> {blog.authorName}
                  </Typography>
                </CardContent>
                <CardActions className="button-container">
                  <Button size="small" className="beautiful-button" component={Link} to={`/blogs/${blog.id}`}>
                    View Blog
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="button-container">
          <Button
            variant="contained"
            className="beautiful-button"
            component={Link}
            to="/write"
          >
            Create New Blog
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ViewBlogs;
