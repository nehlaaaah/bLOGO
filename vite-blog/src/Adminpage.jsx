import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, TextField } from '@mui/material';
import './Adminpage.css';

const AdminPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Dummy data
  const dummyBlogs = [
    { _id: '1', title: 'First Blog', content: 'This is the first blog post.' },
    { _id: '2', title: 'Second Blog', content: 'This is the second blog post.' },
    { _id: '3', title: 'Third Blog', content: 'This is the third blog post.' },
  ];

  const dummyUsers = [
    { _id: '1', name: 'John Doe', email: 'john@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  useEffect(() => {
    fetchBlogs();
    fetchUsers();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/blogs');
      setBlogs(Array.isArray(response.data) && response.data.length > 0 ? response.data : dummyBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs(dummyBlogs);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(Array.isArray(response.data) && response.data.length > 0 ? response.data : dummyUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers(dummyUsers);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(/blogs/${id});
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(/users/${id});
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const updateUser = async () => {
    try {
      await axios.put(/users/${editingUser._id}, { name, email });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      setUsers(prevUsers => prevUsers.map(user => 
        user._id === editingUser._id ? { ...user, name, email } : user
      ));
    } finally {
      setEditingUser(null);
      setName('');
      setEmail('');
    }
  };

  return (
    <Box className="admin-container">
      <Typography variant="h4">Admin Page</Typography>

      <Box className="admin-section">
        <Typography variant="h5">Blogs</Typography>
        {Array.isArray(blogs) && blogs.map((blog) => (
          <Box key={blog._id} className="admin-item">
            <Typography variant="h6">{blog.title}</Typography>
            <Typography variant="body1">{blog.content}</Typography>
            <Button onClick={() => deleteBlog(blog._id)}>Delete</Button>
          </Box>
        ))}
      </Box>

      <Box className="admin-section">
        <Typography variant="h5">Users</Typography>
        {Array.isArray(users) && users.map((user) => (
          <Box key={user._id} className="admin-item">
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Button onClick={() => editUser(user)}>Edit</Button>
            <Button onClick={() => deleteUser(user._id)}>Delete</Button>
          </Box>
        ))}
      </Box>

      {editingUser && (
        <Box className="admin-section">
          <Typography variant="h5">Edit User</Typography>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={updateUser}>Update</Button>
        </Box>
      )}
    </Box>
  );
};

export default AdminPage;