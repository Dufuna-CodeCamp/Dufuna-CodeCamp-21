import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import Verification from './components/VerificationPage';




function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path='/Verification' element={<Verification />}/>
      </Routes>
     </BrowserRouter>
     
      

      

    </div>
  );
}

export default App;
