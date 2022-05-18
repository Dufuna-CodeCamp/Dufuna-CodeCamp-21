import React from 'react';
import Button from "./Button";

const Navbar = () =>{
    return(
        <div className="nav-container">
            <h3 className="log">Food<span>Bag</span></h3>
            <div className="nav-links">
                <li className="nav-link">Cart</li>
                <li className="nav-link">Login</li>
                <Button 
                name="Sign up"
                backgroundColor="white"
                color="brown"
                padding="10px 20px"/>
            </div>
        </div>
    )
}

export default Navbar;