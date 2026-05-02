import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import SignIn from './Pages/Auth/SignUp'
import Payment from './Pages/Payments/Payment'
import Order from './Pages/Orders/Order'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/auth' element={<SignIn/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryName' element={<Results/>}/>
      </Routes>
    </Router>
  )
}

export default Routing