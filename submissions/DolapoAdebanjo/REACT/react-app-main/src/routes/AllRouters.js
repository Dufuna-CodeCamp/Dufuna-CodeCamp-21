import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import VerificationPage from '../pages/VerificationPage';
import OrderSuccessfulPage from '../pages/OrderSuccessfulPage';

function AllRouters() {
  return (
    <Routes>
        <Route exact path="/" element={<CartPage />} />
        <Route exact path="/verify" element={<VerificationPage />} />
        <Route exact path="/success" element={<OrderSuccessfulPage />} />
    </Routes>
  )
}

export default AllRouters;