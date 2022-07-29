import React from "react";

const Input = (props) => {

    return (
        <div className="input-field">
            <label htmlFor={props.name} className="label">
                {props.title}
            </label>

            <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.handleChange} placeholder={props.placeholder} />
        </div>
    )
}

export default Input;