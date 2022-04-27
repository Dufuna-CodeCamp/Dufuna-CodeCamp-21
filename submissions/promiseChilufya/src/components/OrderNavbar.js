import React from 'react';


const OrderNavbar = () => {
  return (
      <nav>
    <div className="top-navbar">
        <div className="order-foodbag">
            <p>Food<span>Bag</span></p>
        </div>
        <ul>
            <li id="order-list">
                <a id="cart" href="cart">
                 Cart
                </a>
                <a id="login" href="login">
                 Login
                </a>
                <a id="logout" href="logout">
                 Sign Up
                </a>
            </li>
        </ul>
      
    </div>
    </nav>
  )
}

export default OrderNavbar
