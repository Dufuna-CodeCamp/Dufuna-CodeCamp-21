import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CartPage from './components/CartPage';
import Verification from './components/Verification';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<CartPage />}/>
          <Route exact path="/verification-page" element={<Verification />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
