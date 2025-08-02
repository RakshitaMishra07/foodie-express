// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleCart }) => {
  return (
    <header className="header">
      <div className="logo">
        🍽️ FoodieZone
      </div>

      <div className="nav-links">
        {/* Login/Signup Links */}
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/signup" className="nav-button">Signup</Link>

        {/* Cart Icon */}
        <button className="cart-button" onClick={toggleCart}>
          🛒
        </button>
      </div>
    </header>
  );
};

export default Header;