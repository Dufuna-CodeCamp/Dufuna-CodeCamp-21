import './App.css';
import {Route, Routes} from 'react-router-dom';
import Verification from './components/Verification.js';
import CartPage from './components/CartPage.js';
import Success from './components/Success.js';

function App() {
  return (
    <div className="container">      
      <Routes>
        <Route path="/Verification" exact element={<Verification />}></Route>
        <Route path="/" exact element={<CartPage /> }></Route>
        <Route path="/Success" exact element={<Success />}></Route>
      </Routes>
    </div>
  );
}

export default App;
