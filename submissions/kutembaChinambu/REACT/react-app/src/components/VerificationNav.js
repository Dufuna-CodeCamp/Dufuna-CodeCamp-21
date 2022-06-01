import React from "react";

const VerificationNav = (props) => {
    return (
        <div>
            <nav>
            <ul className="lowernav">
                <li><a className="home" href="/Verification"> <span className="black">{props.verification}</span></a></li>
                <li><a href="/">{props.cart}</a></li>
                <li><a className="home" href="/"> {props.home}</a></li>
               
            </ul>

            </nav>
        </div>
    )
}
export default VerificationNav;