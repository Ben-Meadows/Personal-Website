// src/components/Header.js
import React from 'react';
import Ben_pic from '../Images/Ben_pic.jpeg';
import '../Styles/Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header-container">
      <img src={Ben_pic} alt="Ben Meadows" className="profile-image" />
      <h1 className="profile-name">Ben Meadows</h1>
    </header>
  );
}

export default Header;
