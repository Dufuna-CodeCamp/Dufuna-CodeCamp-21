import React from "react";

function Checkout(props) {
    return(
        <>
            <div>
                <button type="button" id={props.id}>{props.name}</button>
            </div>
        </>
    )
}

export default Checkout