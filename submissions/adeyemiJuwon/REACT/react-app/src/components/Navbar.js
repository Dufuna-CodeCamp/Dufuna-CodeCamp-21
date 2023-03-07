import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="left_navbar">
        <h1>
          Food<span>Bag </span>
        </h1>
      </div>
      <div className="right_navbar">
        <ul>
          <li>Cart</li>
          <li>Login</li>
          <li>
            {' '}
            <button>Signup</button>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
