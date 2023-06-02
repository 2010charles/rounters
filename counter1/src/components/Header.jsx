import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='nav-bar'>
      <div className='right'>
        <ul className='right1'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contancts">Contacts</Link></li>
        <li><Link to ="/more">More</Link></li>
        </ul>
      </div>
        <div className='left'>
         <ul>
          <li>Login</li>
          <li>Register</li>
         </ul>
        </div>
    </div>
  )
}

export default Header
