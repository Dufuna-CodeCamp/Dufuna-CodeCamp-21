import React from "react";

const Button = (props) => {
    return (
        <div>
            <button id={props.id} type={props.type} onClick={props.handleOnClick}>
                <a href={props.link}>{props.title}</a>
            </button>
        </div>
    )
}

export default Button;