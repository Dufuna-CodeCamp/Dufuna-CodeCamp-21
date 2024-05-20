import React from "react";

const InputElement = (props) => {
    return (
        <div className="input-container">
            <label htmlFor={props.name} className="poppins-medium">{props.labelName}</label>
            <input className="poppins-regular" id={props.name} name={props.name} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange} required/>
        </div>
    )
}

export default InputElement