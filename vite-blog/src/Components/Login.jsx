import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email.value,
        password: password.value,
      });

      const { token, id } = response.data;

      // Save token and user ID to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);

      alert("Login Successful");
      
      // Log userId to the console
      console.log('userId:', id);
      
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      alert('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
