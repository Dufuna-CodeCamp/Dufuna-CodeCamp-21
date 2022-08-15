import React from 'react';
import './expiry.css';

function CardExpiry(props) {
  return (
    <div className='expiry'>
        <div className='expiry-input'>
            <label htmlFor={props.expiryId}>
                <h3>{props.expiryTitle}</h3>
            </label>
            <input id={props.expiryId} type={props.expiryInputType} placeholder={props.expiryPlaceholder} className="text" />
        </div>
        <div className='expiry-input'>
            <label htmlFor={props.cvcId}>
                <h3>{props.cvcTitle}</h3>
            </label>
            <input id={props.cvcId} type={props.cvcInputType} placeholder={props.cvcPlaceholder} className="text" />
        </div>
    </div>
  )
}

export default CardExpiry;