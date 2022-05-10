
import React from "react";


function VerificationHeader () {

    return(
        
        <nav>

        <div className="headers">
        <div className="foodbags">
            <p>Food<span>Bag</span> </p>
        </div>
        <ul >
            <li id="top-nav">
                <a id="cart-header" href="/cart">
                 Cart
                </a>
                <a id="login-header" href="/login">
                 Login
                </a>
                <a id="logout-header" href="/logout">
                 Sign Up
                </a>
            </li>
        </ul>
    </div>
    </nav>
    
    );
}

export default VerificationHeader;