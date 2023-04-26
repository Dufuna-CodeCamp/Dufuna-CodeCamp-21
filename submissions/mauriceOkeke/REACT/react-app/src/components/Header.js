import React from "react";

const Header = () => (
  <div>
    <header className="header">
      <p className="logo">
        Food<span className="red-color">Bag</span>
      </p>
      <nav className="nav">
        <ul className="list">
          <li className="list-item">
            <a href="./">Cart</a>
          </li>
          <li className="list-item">
            <a href="./">Login</a>
          </li>
          <li className="list-item">
            <a href="./">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
