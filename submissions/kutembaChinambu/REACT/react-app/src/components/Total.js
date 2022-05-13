import React from "react";

const Total = (props) => {
    return (
        <div>
            <ul className="wrapper22">
                <li><h2 id="total">{props.total}</h2></li>
                <li><h2 id="priceTotal">#{props.totalCost}</h2></li>
            </ul>
            

        </div>
    )
}
export default Total;

 