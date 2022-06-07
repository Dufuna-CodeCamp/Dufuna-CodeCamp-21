import React from "react";

function Input(props){
    return(
        <div className = "form-control">
            <label htmlFor={props.name} className = "">
                {props.title}
            </label>

            <input
            className=""
            name={props.name}
            type ={props.inputType}
            value={props.value}
            onChange ={props.handleChange}
            placeholder ={props.placeholder}
            />
        </div>
    )
}
export default Input;