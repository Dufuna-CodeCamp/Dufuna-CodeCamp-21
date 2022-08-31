import React from "react";

const Select = (props) => {

    return (
        <div className="select-field">
            <label htmlFor={props.name} className="label">
                {props.title}
            </label>
            
            <select id={props.id} type={props.type} value={props.value} onChange={props.handleChange} placeholder={props.placeholder} >
                {props.options}
            </select>
        </div>
    )
}

export default Select;