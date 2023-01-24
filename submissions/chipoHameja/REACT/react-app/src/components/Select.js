import React from 'react';

const Select = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.name} className='form-label'>{props.title}</label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                className='form-control'
            >
                {props.options.map((option) => {
                    return (
                        <option key={option} value={option} label={option}>{option}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default Select;