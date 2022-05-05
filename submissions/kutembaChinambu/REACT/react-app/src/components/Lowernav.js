import React from "react";

const Lowernav = (props) => {
    return (
        <div>
            <nav>
            <ul className="lowernav">
                <li><a href="/">{props.cart}</a></li>
                <li><a className="home" href="#"> {props.home}</a></li>
            </ul>

            </nav>
            

        </div>
    )
}
export default Lowernav;