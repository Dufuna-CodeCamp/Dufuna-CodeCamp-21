import React from "react";

function Checkout(props) {
    return(
        <>
                <button type="button" className="btnCheckout" id={props.id}>{props.name}</button>
            
        </>
    )
}

export default Checkout