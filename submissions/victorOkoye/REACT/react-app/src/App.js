import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<CartPage />}/>
          <Route path="/verification" element={<Verification />}/>
          <Route path="/ordersucceful" element = {<OrderSuccessful />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

