import React from 'react';
import './Button.css'
function Button(props){
    return(
        <button 
        onClick={props.handleOnClick}
        type = {props.type}
        id = {props.id}
        className= {props.classN}
        > 
        {props.value}

        </button>
    )

};

export default Button;