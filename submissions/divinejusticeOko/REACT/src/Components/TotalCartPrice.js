import React from "react";

const TotalCartPrice = (props) => {
    return (
        <div className="totalCartPrice flex poppins-semibold fs-xl">
            <p>Total</p>
            <p>#{props.totalCartPrice}</p>
        </div>
    )
}

export default TotalCartPrice;