import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payments/Payment'
import Order from './Pages/Orders/Order'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProdductDetail/ProductDetail'
import Auth from './Pages/Auth/auth'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryName' element={<Results/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>

      </Routes>
    </Router>
  )
}

export default Routing