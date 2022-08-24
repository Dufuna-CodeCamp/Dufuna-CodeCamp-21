import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CartPage from './components/CartPage';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<CartPage />}/>
          <Route exact path="/verification-page" element={<Verification />}/>
          <Route exact path="/order-successful" element={<OrderSuccessful />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
