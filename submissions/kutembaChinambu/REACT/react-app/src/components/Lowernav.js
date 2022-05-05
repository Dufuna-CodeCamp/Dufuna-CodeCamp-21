import React from "react";

const Lowernav = (props) => {
    return (
        <div>
            <nav>
            <ul className="lowernav">
                <li><a href="/"><span className="black">{props.cart}</span></a></li>
                <li><a className="home" href="/"> {props.home}</a></li>
            </ul>

            </nav>
            

        </div>
    )
}
export default Lowernav;