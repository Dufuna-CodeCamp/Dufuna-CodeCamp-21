import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Verification from './routes/verification'
import CartPage from './routes/carts'
import SucessfulPage from './routes/succes'
import UnSucess from './routes/unsuces'



export default function routes() {
    return (
        <Routes>
            <Route exact path="/" element={<CartPage />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/sucess" element={<SucessfulPage />} />
            <Route path="/unsucess" element={<UnSucess />} />
        </Routes>


    )
}
