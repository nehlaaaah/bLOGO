import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const Blog = ({ title, author, content }) => {
  return (
    <Card sx={{ maxWidth: 345, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={`https://via.placeholder.com/345x140.png?text=${title}`}
          alt={title}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            by {author.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" sx={{ mt: 2 }}>
            {content.slice(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Blog;
