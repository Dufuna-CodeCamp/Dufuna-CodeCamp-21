import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <header className="flex poppins-regular">
                <img src="/images/FoodBag.png" alt="FoodBag Logo"/>

                
                <ul className="nav flex fs-md">
                   <li className="nav-item active"><NavLink to='/'>Cart</NavLink> </li>
                    <li className="nav-item"><NavLink to="login">Login</NavLink> </li>
                    <li className="nav-item poppins-medium"><NavLink to="signUp" className='sign-up-btn '>Sign Up</NavLink> </li>
                </ul>
            </header>
        </Fragment> 
    )
} 

export default Navbar;