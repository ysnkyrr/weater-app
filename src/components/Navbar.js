import React from 'react'
import uologo from "./Trsvg/uo-logo-white.png"

function Navbar() {
  return (
    <nav className='navbar'>
      <a href="https://www.yasinakyar.com/" target="_blank"><img className='navbar-image' src={uologo} alt="www.yasinakyar.com" /></a>
    </nav>
  )
}

export default Navbar