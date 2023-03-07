import "./cart.css";
import "./cartAndroid.css";
import Cart from "./Component/Cart";
import Verification from "./Component/Verification";
import OrderSummary from "./Component/OrderSummary";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="verification" element={<Verification />} />
        <Route path="/verification/ordersuccess" element={<OrderSummary />} />
      </Routes>
    </div>
  );
}

export default App;