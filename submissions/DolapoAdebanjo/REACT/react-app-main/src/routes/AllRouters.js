import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CartPage from '../pages/CartPage'
import VerificationPage from '../pages/VerificationPage'

function AllRouters() {
  return (
    <Routes>
        <Route exact path="/" element={<CartPage />} />
        <Route exact path="/verify" element={<VerificationPage />} />
    </Routes>
  )
}

export default AllRouters;