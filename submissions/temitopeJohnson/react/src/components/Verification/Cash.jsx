import React from "react";
import { Link } from "react-router-dom";
import './Verification.css'

const Cash = () => {
    return (
        <div>
            <h2 className="Cash">Payment would be made using cash.</h2>
            <h3 className="CashSub">Kindly have the exact amount at hand</h3>
            <Link to="/OrderSuccessful">
                <button className='PaymentBtn' >Pay</button>
            </Link>
        </div>
    );
}

export default Cash;