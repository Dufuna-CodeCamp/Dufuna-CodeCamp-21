import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <Fragment>
            <header className="flex poppins-regular">
                <img src="/images/FoodBag.png" alt="FoodBag Logo"/>

                <ul className="nav flex fs-md">
                    <li className="nav-item active">Cart</li>
                    <li className="nav-item">Login</li>
                    <li className="nav-item sign-up-btn poppins-medium">Sign Up</li>
                </ul>
            </header>
        </Fragment> 
    )
} 

export default Navbar;