import React from "react";

function Select(props){
    return(
        <>
            <label className="form-label" htmlFor="paymentMethod">Payment Method</label>
            <select className="form-control" name={props.name} id="paymentMethod" onChange={props.handleChange}>
                <option value="">Select Payment</option>
                <option value="card">Card</option>
                <option value="transfer">Bank Transfer</option>
                <option value="ussd">USSD</option>
            </select>
        </>
    )
}

export default Select;