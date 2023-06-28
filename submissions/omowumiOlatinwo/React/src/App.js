import './styles.css';
import {Route, Routes} from 'react-router-dom';
import CartPage from '../src/Components/CartPage.js';
import Verification from '../src/Components/Verification.js';
import Success from '../src/Components/Success.js';

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
