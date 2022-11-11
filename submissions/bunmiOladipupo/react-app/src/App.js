import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart.js';
import Header from './components/Header.js';
import Subheader from './components/Subheader.js';

function App() {
  return (
    <div className="container">
      <Header />
      <Subheader />
      <Cart />
    </div>
  );
}

export default App;
