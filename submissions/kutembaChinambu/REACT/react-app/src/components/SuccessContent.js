import React from "react";

const SuccessContent = (props) => {
    return (
        <div id="success">
            <img src={props.image} alt="successful" />
            <p id="green">Order successful</p>
            <p>We have started processing</p>
            <p>your order.</p>
            

        </div>
    );
};
export default SuccessContent;