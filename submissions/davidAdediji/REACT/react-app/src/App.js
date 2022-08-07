import './App.css';
import Cart from './components/Cart';
import OrderSuccess from './components/OrderSuccess';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import products from './data';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product)=>{
    const exist = cartItems.find((item)=>item.id===product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item)=> item.id === product.id?{...exist, quantity:exist.quantity + 1}:item)
      )
    }else{
      setCartItems([...cartItems, {...product, quantity:1}]);
    }
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Cart products={products} onAdd={onAdd}/>} />
        <Route path="/success" element={<OrderSuccess/>} />
        <Route path="*" element={
          <main style={{ padding: "1rem"}}>
            <p style={{fontSize:"78px"}}>Page Not Found</p>
          </main>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
