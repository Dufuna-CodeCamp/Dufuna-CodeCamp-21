import React from 'react';
import './button.css'


function Button(props) {
    
    return (
        <button 
            onClick={props.handleOnClick}
            type={props.type}
            id={props.id}
            className={props.classs}
        >
            {props.value}
        </button>
    );
}

export default Button;