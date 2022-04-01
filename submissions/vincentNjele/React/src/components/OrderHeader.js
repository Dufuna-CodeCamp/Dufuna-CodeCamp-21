
import React from "react";

function OrderHeader () {

    return(

        <nav>

        <div className="top-header">
        <div className="order-foodbag">
            <p>Food<span>Bag</span> </p>
        </div>
        <ul>
            <li id="order-list">
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

export default OrderHeader;