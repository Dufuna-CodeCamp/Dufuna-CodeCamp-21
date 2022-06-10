import React, { useState} from 'react';
import { Routes, Route} from "react-router-dom";

import  CartPage  from './components/CartPage';
import Header from './components/Header';
import OrderSuccessful  from './components/OrderSuccessful';
import VendorsPage from './components/VendorsPage';
import Verification from './components/Verification';


function App() {

  const [cartItems, setCartItems] = useState([]);

    const addCart = (menu) => {
        const exist = cartItems.find(x => x.id === menu.id);
        if(exist) {
          setCartItems(cartItems.map(x => x.id === menu.id ? {...exist, qty: exist.qty +1 } : x ));
        } else {
          setCartItems([...cartItems, { ...menu, qty: 1 }]);
        }
    }

    const onRemove = (menu) => {
      const exist = cartItems.find((x) => x.id === menu.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== menu.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === menu.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

    const removeAll = (cartItems) => {
      if (window.confirm("Do you want to remove all menus in the cart?")) {
        setCartItems( cartItems = []); 
      } 
    }

    const removeMenu = (menu) =>{
      if (window.confirm("Are you sure you want to delete this menu from the cart?")) {
        setCartItems( cartItems.filter((el) => el !== menu ) )
      }     
    };


  return (
    <div className="FoodBag">
      <Header cartItems={cartItems} />
      
      
      <Routes>
        <Route path="/" element={<VendorsPage addCart={addCart} />} />
        <Route path="/CartPage" 
          element={
            <CartPage 
              cartItems={cartItems} 
              onRemove={onRemove} 
              addCart={addCart} 
              removeMenu={removeMenu} 
              removeAll={removeAll} 
            />
          }
        />
        <Route path="VerificationPage" element={<Verification />} />
        <Route path="OrderSuccessful" element={<OrderSuccessful />} />
        
      </Routes>      
    </div>
  );
};

export default App;