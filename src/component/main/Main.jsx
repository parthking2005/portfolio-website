import React from 'react'
import { Outlet } from 'react-router-dom'
import './Main.css'
import Navbar from '../navbar/Navbar.jsx'
import Sidebar from '../sidebar/Sidebar.jsx'
// Removed background animation due to responsiveness issues

function Main() {
  return (
    <>
      {/* Background animation removed */}
      <div className='main items-center justify-center flex'>
        <div className='flex main-route'>
          <div className='first-side'><Sidebar /></div>
          <div className='second-side'>
            <div className='navbar-side'><Navbar /></div>
            <div className='down-side'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main