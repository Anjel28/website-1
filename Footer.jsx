import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;