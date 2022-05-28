import React from 'react';
import Button from "./Button";

const Navbar = () =>{
    return(
        <div className="nav-container">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a
            <h3 className="log">Food<span>Bag</span></h3>
            <div className="nav-links">
                <li className="nav-link">Cart</li>
                <li className="nav-link">Login</li>
<<<<<<< HEAD
=======
            <h3 className="log"><a href="#" >Food<span>Bag</span></a></h3>
            <div className="nav-links">
                <li className="nav-link"><a href="#">Cart</a></li>
                <li className="nav-link"><a href="#">Login</a></li>
>>>>>>> 323abe5b (React task 1)
=======
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a
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