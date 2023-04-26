import React from "react";

const Navigation = (props) => {
    return (
         <header>
            <div>
                <h2 id="foodbag">Food<span>Bag</span> </h2>
            </div>
            <div className="nav">
                <a href="../../public/index.html" id="nav-cart">Cart</a>
                <a href="../../public/index.html">Login</a>
                <a href="../../public/index.html" id="nav-signup">Sign up</a>
            </div>
         </header>
    )
}

export default Navigation;