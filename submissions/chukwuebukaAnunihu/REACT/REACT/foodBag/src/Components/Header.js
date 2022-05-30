import React from "react";
import '../App.css'

const Header = () => {
  return (
    <header>
      <div>
        <p className="top-left">
          Food<span>Bag</span>
        </p>
      </div>
      <nav>
        <div className="header-nav">
          <a href="/Header.js" className="cart">Cart</a>
          <a href="/Header.js">Login</a>
          <a href="/Header.js">
            <input type="button" value="Sign up" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header
