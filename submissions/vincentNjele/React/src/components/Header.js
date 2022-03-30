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
                <a id="cart" href="#">
                 Cart
                </a>
                <a id="login" href="#">
                 Login
                </a>
                <a id="logout" href="#">
                 Sign Up
                </a>
            </li>
        </ul>
    </div>
    </nav>
    
    );
}

export default Header;