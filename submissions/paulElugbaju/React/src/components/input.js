import React from "react";

export const Input = (props) => {
  return (
    <div className={props.class}>
      <label className={props.labelClass} htmlFor={props.name}>{props.title}</label>
      <input
        className={props.inputClass}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};
