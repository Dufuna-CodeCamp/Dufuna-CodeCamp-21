import { Routes, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import VerificationPage from "./Components/VerificationPage";
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="verify" element={<VerificationPage />} />
        <Route path="/" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
