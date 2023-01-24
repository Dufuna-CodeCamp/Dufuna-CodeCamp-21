import React from 'react';

const Navbar = () => {

  return (

    <nav>

        <div className="Navbar">
        <div className="foodbag">
            <p>Food<span>Bag</span> </p>
        </div>
        <ul>
            <li>
                <a id="cart" href="/cart">
                 Cart
                </a>
                <a id="login" href="/login">
                 Login
                </a>
                <a id="logout" href="/logout">
                 Sign Up
                </a>
            </li>
        </ul>
    </div>
    </nav>
    
    );
}

export default Navbar
