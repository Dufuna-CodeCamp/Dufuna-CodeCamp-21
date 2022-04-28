import React from "react";

function Header () {

    return(

        <nav>

        <div className="header">
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

export default Header;