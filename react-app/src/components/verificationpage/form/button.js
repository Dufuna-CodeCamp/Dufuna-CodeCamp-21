import React from "react";

function Button(props){
    return(
            <button className ="" type={props.inputType}>
                {props.title}
            </button>
    )
}
export default Button;