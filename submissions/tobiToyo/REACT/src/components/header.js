import React from "react";
import HeaderLink from "./headerLinks";
import Button from "./button";
import Trail from "./trail";


const Header = () => {

    return (
        <div>
            <div className="header-div">
                <h1 className="company-name">Food<span style={{color: "#AD4C4C"}}>Bag</span> </h1>

                <div className="header-right">
                    <HeaderLink href="#" title="Cart" color="#AD4C4C" />
                    <HeaderLink href="#" title="Login" color="#696969" />
                    
                    <Button className="header-btn" title="Sign up" />
                </div>
 
            </div>

            <Trail grey="Home > " bold="Cart" />

        </div>
    )
}

export default Header;