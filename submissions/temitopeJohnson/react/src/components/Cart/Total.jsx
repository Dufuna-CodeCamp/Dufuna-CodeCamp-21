import React from "react";

const Total = (props) => {
    return (
        <div className="Total">
            <h1>Total</h1>
            <h1 className="ProductPrice"><b>&#8358; {props.price}</b></h1>
        </div>
    );
}

export default Total;