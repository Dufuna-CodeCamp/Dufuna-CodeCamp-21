import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Verification from './pages/Verification';
import Cart from './components/Cart';
import Success from './pages/Success';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={ <Cart cartTitle="Cart" /> } />
        <Route path="/verification" element={ <Verification /> } />
        <Route path='/success' element={ <Success /> } />
      </Routes>
    </div>
  );
}

export default App;
