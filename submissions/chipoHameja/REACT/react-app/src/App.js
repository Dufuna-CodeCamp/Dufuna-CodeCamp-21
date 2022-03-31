import NavBar from './components/NavBar';
import BreadCrumb from './components/BreadCrumb';
import Cart from './components/Cart';
import Delivery from './components/Delivery';

import Total from './components/Total';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BreadCrumb />
      <Cart cartTitle="Cart" />
      <Checkout />
    </div>
  );
}

export default App;
