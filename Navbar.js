
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa' }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: '#1E40AF', fontWeight: 'bold' }}>MathMentor</Link>
      </div>
      <div>
        <Link to="/about" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}>About</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>Login/Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
