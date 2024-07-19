import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Start.css';
import Navbar1 from './NavBar1';

const Start = () => {
  const navigate = useNavigate();

  const handleStartNowClick = () => {
    navigate('/registration');
  };

  return (
    <>
    <Navbar1/>
    <div className="magazine">
    <header className="header">
      <div className="title">bLOGO</div>
      <div className="floating-text">
        <div>CREATE YOUR OWN</div>
        <div>BEAUTIFUL BLOG</div>
      </div>
      <button className="start-button" onClick={handleStartNowClick}>
        Start Now
      </button>
    </header>
  </div></>
    
  );
};

export default Start;
