import "./navbar.scss";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="navbar__logo" href="/">
        Food<span className="navbar__logo--red">Bag</span>
      </p>
      <div className="navbar__links">
        <a className="navbar__links--cart" href="/cart">
          Cart
        </a>
        <a className="navbar__links--login" href="/login">
          Login
        </a>
        <button className="navbar__links--signup" href="/signup">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
