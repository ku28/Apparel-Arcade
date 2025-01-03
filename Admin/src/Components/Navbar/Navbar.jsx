import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={navlogo} alt="logo" />
        <h1>APPAREL ARCADE</h1>
        <p className='adminf'>ADMIN</p>
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
