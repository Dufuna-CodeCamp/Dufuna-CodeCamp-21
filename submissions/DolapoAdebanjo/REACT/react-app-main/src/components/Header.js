import React from 'react';

const Header = () => {
    return(
        <header>
        <div id="logo">
          <p>Food<span>Bag</span></p>
        </div>
        <nav>
          <a href="/" className="cart"
            ><div id="this_cart">Cart</div>
          </a>
          <a href="/">Login</a>
          <a href="/">Sign up</a>
        </nav>
      </header>
    )
};

export default Header;