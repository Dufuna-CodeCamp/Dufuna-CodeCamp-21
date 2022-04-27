import React from 'react';
import Button from "./Button";

const Navbar = () =>{
    return(
        <div className="nav-container">
<<<<<<< HEAD
            <h3 className="log">Food<span>Bag</span></h3>
            <div className="nav-links">
                <li className="nav-link">Cart</li>
                <li className="nav-link">Login</li>
=======
            <h3 className="log"><a href="#" >Food<span>Bag</span></a></h3>
            <div className="nav-links">
                <li className="nav-link"><a href="#">Cart</a></li>
                <li className="nav-link"><a href="#">Login</a></li>
>>>>>>> 323abe5b (React task 1)
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