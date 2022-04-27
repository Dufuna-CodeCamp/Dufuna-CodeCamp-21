import React from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';

=======
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
>>>>>>> 323abe5b (React task 1)


function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route exact path="/" element={<CartPage />}/>
          <Route path="/verification" element={<Verification />}/> 
          <Route path="/ordersucceful" element = {<OrderSuccessful />}/>  
        </Routes>
      </Router>
=======
      <CartPage />
>>>>>>> 323abe5b (React task 1)
    </div>
  );
}

export default App;

