import React from "react";

const SelectElement = (props) => {
    return (
        <div className="input-container">
            <label htmlFor={props.name} className="poppins-medium">{props.labelName}</label>
            <select id={props.name} name={props.name} onChange={props.onChange} value={props.value} className="poppins-regular">
            <option value="card">Card</option>
            <option value="bank transfer">Bank Transfer</option>
            <option value="ussd">USSD</option>
        </select>
        </div>
    )
}
export default SelectElement;