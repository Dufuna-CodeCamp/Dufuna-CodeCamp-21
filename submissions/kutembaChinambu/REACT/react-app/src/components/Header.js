import React from "react";

const Header = (props) => {
    return (
        <div>
            <nav>
            <ul>
                <a href="/">{props.heading1}<span>{props.heading2}</span></a>
                    <li className="signup">{props.signUp}</li>
                    <li><a href="#">{props.linkElement1}</a></li>
                    <li><a href="#">{props.linkElement2}</a></li>

            </ul>

            </nav>

        </div>
    )
}
export default Header;