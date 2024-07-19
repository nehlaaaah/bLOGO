import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import Navbar1 from './NavBar1';

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    try {
      await axios.post('http://localhost:5000/register', {
        name: name.value,
        email: email.value,
        password: password.value,
      });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <>
      <Navbar1 />
      <div className="registration-container">
        <div className="registration-card">
          <h2 className="registration-title">Register</h2>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="registration-button">Register</button>
          </form>
          <div className="login-link">
            Already have an account? <a href="#" onClick={handleLoginClick}>Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
