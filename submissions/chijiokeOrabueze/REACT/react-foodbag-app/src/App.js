import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';

<<<<<<< HEAD
=======
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
>>>>>>> 323abe5b (React task 1)
=======
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a


function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a
      <Router>
        <Routes>
          <Route exact path="/" element={<CartPage />}/>
          <Route path="/verification" element={<Verification />}/> 
          <Route path="/ordersucceful" element = {<OrderSuccessful />}/>  
        </Routes>
      </Router>
<<<<<<< HEAD
=======
      <CartPage />
>>>>>>> 323abe5b (React task 1)
=======
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a
    </div>
  );
}

export default App;

