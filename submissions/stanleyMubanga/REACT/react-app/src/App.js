import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Cart from './components/pages/cart/Cart';
import Verification from "./components/pages/verificationPage/Verification";
import OrderSuccess from './components/pages/orderPage/OrderSuccess';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Cart />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
