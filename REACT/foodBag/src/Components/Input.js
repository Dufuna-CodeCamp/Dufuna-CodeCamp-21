import React from "react";

const Input = (props) => {
  if (!props.showInput) {
    return null;
  }

  return (
    <div className={props.div}>
      <label htmlFor={props.name} className="form-label ">
        {props.title}
      </label>
      <input
        className={props.class}
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
    </div>
  );
};

export default Input;
