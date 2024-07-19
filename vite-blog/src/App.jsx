import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Start from './Components/Start';
import Login from './Components/Login';
import Next from './Components/Next';
import Write from './Components/Write';
import About_bLOGO from './Components/About_bLOGO';
import Contact from './Components/Contact';
import BlogsPage from './Components/BlogsPage';
import Registration from './Components/Registration';
import AdminPage from './Components/Adminpage';

const App = () => {
  const location = useLocation();
  const showNavbar = !['/login', '/registration', '/'].includes(location.pathname.toLowerCase());

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<BlogsPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/about" element={<About_bLOGO />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<Next />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Adminpage" element={<AdminPage />} />
     
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
