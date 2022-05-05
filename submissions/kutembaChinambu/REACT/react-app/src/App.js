import { Routes, Route } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Cart />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
