import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css';  // Ensure the styles are applied

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/content" className="nav-link">Content</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
