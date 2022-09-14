import React from "react";
import './Verification.css'

const Cash = () => {
    return (
        <div>
            <h2 className="Cash">Payment would be made using cash.</h2>
            <h3 className="CashSub">Kindly have the exact amount at hand</h3>
            <button className='PaymentBtn' >Pay</button>
        </div>
    );
}

export default Cash;