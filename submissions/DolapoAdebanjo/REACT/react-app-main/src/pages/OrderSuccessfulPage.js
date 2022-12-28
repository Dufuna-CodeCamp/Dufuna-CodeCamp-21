import React from "react";
import Header from "../components/Header";

const OrderSuccessfulPage = () => {
  return (
      <div className="success-container">
        <Header />
        <div style={{display: 'flex',flexDirection:'column', alignItems: 'center', marginTop: '100px'}}>
        <img src="../assets/sucess.png" alt="success page"/>
        <p style={{color:'#5EA304',fontSize: '30px', padding: '20px 0'}}>Order successful</p>
        <p style={{fontSize: '15px'}}>We have started processing your order.</p>
        </div>
      </div>
  );
};

export default OrderSuccessfulPage;