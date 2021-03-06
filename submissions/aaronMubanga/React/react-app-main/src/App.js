import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './cart/presentation/header/Header';
import Html from './cart/presentation/cartPage';
import Verification from './cart/verification';
import OrderSuccess from './cart/presentation/orderSuccessPage';

function App() {

  return(
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path='/' element={<Html />} />
        <Route path="/verification" element={<Verification />} />
        <Route path='/verification/OrderSuccess' element={<OrderSuccess />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
