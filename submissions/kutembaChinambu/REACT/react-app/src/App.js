import { Routes, Route } from "react-router-dom";
import Verification from "./components/Verification";
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Cart />}></Route>
        <Route path="/Verification" element={<Verification />}></Route>
      </Routes>
    </>
  );
}

export default App;
