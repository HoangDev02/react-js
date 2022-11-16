import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Booking</span>
        <div className='navMenu'>
            <ul className='menu-list'>
                <li className='menu-item current'>
                    <a href='/' className='menu-link'>Home</a>
                </li>
                <li className='menu-item'>
                    <a href='/' className='menu-link'>pages</a>
                </li>
                <li className='menu-item'>
                    <a href='/' className='menu-link'>features</a>
                </li>
                <li className='menu-item'>
                    <a href='/' className='menu-link'>offer & package</a>
                </li>
                <li className='menu-item'>
                    <a href='/rooms' className='menu-link'>rooms</a>
                </li>
                <li className='menu-item'>
                    <a href='/' className='menu-link'>element</a>
                </li>
                <li className='menu-item'>
                    <a href='/' className='menu-link'>view</a>
                </li>
            </ul>
        </div>
        <div className='navBtn'>
            <button className='navButton'>Register</button>
            <button className='navButton'>login</button>

        </div>
    </div>
  )
}

export default navbar