import React from "react";

const PagesNav = () => {

    return (
        <div>
            <div className="PagesNav">
                <p> <span>Home {'>'}</span> Cart</p>
                <p id="Cart">Cart  </p>
            </div>
            <div id="hidden">
                <span>4 items</span>
                <p>Remove all</p>
            </div>
        </div>
        )
}

export default PagesNav;