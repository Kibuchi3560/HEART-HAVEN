import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adopt-child" className="navbar-link">Adopt a Child</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about-us" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact-us" className="navbar-link">Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/signin" className="navbar-link">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
