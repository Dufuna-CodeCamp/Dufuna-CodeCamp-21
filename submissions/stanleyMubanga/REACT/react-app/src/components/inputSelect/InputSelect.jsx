import React from 'react';
import '../formInput/style.css';


function InputSelect(props) {
  return (
    <div className="input pay-select">
        <label htmlFor={props.id}>
            <h3>{props.title}</h3>
        </label>
        <select id={props.id} placeholder={props.placeholder} className="text">
            <option value="card">Card</option>
            <option value="eWallet">e-Wallet</option>
            <option value="momo">Mobile Money</option>
        </select>
    </div>
  )
}

export default InputSelect;