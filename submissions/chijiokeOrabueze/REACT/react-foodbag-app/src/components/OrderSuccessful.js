import React from 'react';

const OrderSuccessful = () => {
    const containerDiv = {height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"};
    const wrapperDiv =  {textAlign: "center"};
    const firstP = {fontSize: "28px", color: "green", fontWeight: "bold"};
  return (
    <div style={containerDiv}>
        <div style={wrapperDiv}>
            <img src= "images/Illustration_success.svg" alt = "order-success"/>
            <p style={firstP}>Order successful</p>
            <p>We have started processing your order.</p>
        </div>
    </div>
  )
}

export default OrderSuccessful
