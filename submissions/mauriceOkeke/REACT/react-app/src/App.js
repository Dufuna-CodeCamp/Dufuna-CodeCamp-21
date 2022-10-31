import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import OrderSuccessful from "./components/OrderSuccessful";
import Verification from "./components/Verification";
import Unsuccessful from "./components/Unsuccessful";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<CartPage />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/success" element={<OrderSuccessful />} />
          <Route exact path="/unsuccessful" element={<Unsuccessful />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
