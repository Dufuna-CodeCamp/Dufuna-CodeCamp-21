import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Html from './cart/presentation/cartPage';
import Verification from './cart/verification';

function App() {

  return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Html />} />
        <Route path="/verification" element={<Verification />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
