import React from "react";

const Button = (props) => {

    return (
        <div>
            <button className={props.className} onClick={props.btnClick} >{props.title}</button>
        </div>
    )
}

export default Button;