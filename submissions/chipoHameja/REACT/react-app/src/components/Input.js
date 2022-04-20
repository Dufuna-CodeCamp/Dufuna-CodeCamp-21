import React from 'react';

const Input = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
                className='form-control'
                name={props.name}
                id={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Input;