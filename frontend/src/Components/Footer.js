// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-5">
      <p>Connect with me:</p>
      <a href="https://github.com/yourgithub" className="text-blue-400 hover:underline">GitHub</a>
      {' | '}
      <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-400 hover:underline">LinkedIn</a>
    </footer>
  );
}

export default Footer;
