import React from "react";

const Header = (props) => {
  if (props.error) {
    return null;
  }
  return (
    <header>
      <div>
        <p className="top-left">
          Food<span>Bag</span>
        </p>
      </div>
      <nav>
        <div className="header-nav">
          <a href="/" className="cart">
            Cart
          </a>
          <a href="/">Login</a>
          <a href="/">
            <input type="button" value="Sign up" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
