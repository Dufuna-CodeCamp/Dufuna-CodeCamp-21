import React, { Component } from "react";
import no from "../images/Illustration_failed.svg";
import Header from "./Header"

class Failed extends Component {
  render() {
    return (
        <div>
        <Header />
      <div className="fail">
        <img src={no} alt="Sad face" />
        <div className="red">
          <p>Order unsuccessful</p>
        </div>
        <div className="wrong">
          <p>Something is wrong with your order.</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Failed;
