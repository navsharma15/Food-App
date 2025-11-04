import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className='app'>
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Routes */}
        <Routes>
          {/* Default Home Page */}
          <Route path='/' element={<Home />} />

          {/* Other Pages */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />

          {/* Fallback for any unknown URL — redirects to Home */}
          <Route path='*' element={<Home />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
