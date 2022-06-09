import { Routes, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import VerificationPage from "./Components/VerificationPage";
import SuccessPage from "./Components/SuccessPage";
import Failed from "./Components/Failed";
import "./App.css";

const App = () => {
  return (
    <div className="container">
        <Routes>
          <Route path="/failed" element={<Failed />}/>
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/" exact element={<CartPage />} />
        </Routes>
    </div>
  );
};

export default App;
