import React from "react";

const Select = (props) => {
  return (
    <div className="select">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="payment-method"
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
