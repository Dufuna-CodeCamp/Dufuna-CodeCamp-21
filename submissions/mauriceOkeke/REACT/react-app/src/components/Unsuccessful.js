import React from "react";
import error_img from "../images/404.png";
import Header from "./Header";

const Unsuccessful = () => {
  return (
    <>
      <Header />
      <main className="unsuccessful">
        <div className="error">
          <img src={error_img} alt="error-img" />
          <div className="unsuccessful-text">
            <p>Order unsuccessful</p>
            <p>Something is wrong with your order.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Unsuccessful;
