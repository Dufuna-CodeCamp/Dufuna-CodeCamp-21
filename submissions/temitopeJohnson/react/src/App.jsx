import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart'
import Verification from './components/Verification/Verification'
import Navbar from './components/NavBar/NavBar';
import OrderSuccessful from './components/OrderSuccessful/OrderSuccessful';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Cart />} />
            <Route path="Verification" element={<Verification />} />
            <Route path="OrderSuccessful" element={<OrderSuccessful />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
