import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
