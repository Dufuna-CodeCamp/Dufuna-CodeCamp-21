import "./cart.css";
import "./cartAndroid.css";
import Cart from "./Component/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
