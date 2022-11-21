import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Booking</span>
        <div className='navMenu'>
            <ul className='menu-list'>
                <li className='menu-item current'>
                    <Link to='/' className='menu-link'>Home</Link>
                </li>
                <li className='menu-item'>
                    <Link to='/' className='menu-link'>pages</Link>
                </li>
                <li className='menu-item'>
                    <Link to='/' className='menu-link'>features</Link>
                </li>
                <li className='menu-item'>
                    <Link to='/' className='menu-link'>offer & package</Link>
                </li>
                <li className='menu-item'>
                    <Link to='/rooms' className='menu-link'>rooms</Link>
                </li>
                <li className='menu-item'>
                    <Link to='/' className='menu-link'>element</Link>
                </li>
                <li className='menu-item'>
                    <Link to='/' className='menu-link'>view</Link>
                </li>
            </ul>
        </div>

        <div className='navBtn'>
            
            {/* <button className='navButton'>Register</button>
            <button className='navButton'>login</button> */}
            <button className='navButton'>Booking Now</button>
        </div>
    </div>
  )
}

export default navbar


