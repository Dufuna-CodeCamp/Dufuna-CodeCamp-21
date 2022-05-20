import { Routes, Route } from "react-router-dom";
import Verification from "./components/Verification";
import './App.css';
import Cart from './components/Cart';
import Successful from "./components/Successful";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Cart />}></Route>
        <Route path="/Verification" element={<Verification />}></Route>
        <Route path="/Successful" element={<Successful />}></Route>
      </Routes>
    </>
  );
}

export default App;
