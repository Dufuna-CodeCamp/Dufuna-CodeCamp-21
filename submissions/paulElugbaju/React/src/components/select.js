import React from "react";

export const Select = (props) => {
  return (
    <div>
      <label className={props.labelClass} htmlFor={props.name}>
        {props.title}
      </label>
      <select
        id={props.name}
        name={props.name}
        className={props.selectClass}
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="" disabled defaultValue>
          {props.placeholder}
        </option>

        {props.options.map((option) => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
