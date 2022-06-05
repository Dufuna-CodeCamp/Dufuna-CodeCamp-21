import React, { Component } from "react";
import Header from "./Header";
import Successful from "./Successful";

class SuccessPage extends Component {
  render() {
    return (
      <div className="success-page">
        <Header />
        <Successful />
      </div>
    );
  }
}

export default SuccessPage;
