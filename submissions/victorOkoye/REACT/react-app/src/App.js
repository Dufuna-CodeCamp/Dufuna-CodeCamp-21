import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<CartPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

