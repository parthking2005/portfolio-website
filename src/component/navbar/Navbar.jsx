import React from 'react'
import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <div className='navbar'>
      <div className='first-side-navbar'></div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({isActive}) => `${isActive ? "text-yellow-400" : "text-white"}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({isActive}) => `${isActive ? "text-yellow-400" : "text-white"}`}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experience" 
            className={({isActive}) => `${isActive ? "text-yellow-400" : "text-white"}`}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/education" 
            className={({isActive}) => `${isActive ? "text-yellow-400" : "text-white"}`}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({isActive}) => `${isActive ? "text-yellow-400" : "text-white"}`}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `${isActive ? "text-yellow-400" : "text-white"}`}
          >
            Contact me
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar