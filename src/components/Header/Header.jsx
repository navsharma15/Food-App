import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Choose Your deverse menu featuring a deletable array of dishes of ceafted with the finest and culinary experties.</p>
        <button>Explore menu</button>
      </div>
    </div>
  )
}

export default Header
