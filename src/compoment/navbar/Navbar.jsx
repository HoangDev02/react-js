import React from 'react'
import './navbar.css'
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleSearch = () => {
        navigate("/booking");
    };

    const logout = ()=>{
        localStorage.removeItem("user");
        navigate("/");
    }

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
        {
            !user ? 
                <div id="navLogin">
                    <a href="/auth/signin">Login</a>
                </div> 
            :
            <>
            <div id="navLogin">
             <p className='user'>{user.fullName || user.email}</p>
            </div> 
            <div id="navLogin">
                 <button className='navBtn'>
                    <Link onClick={logout}>Logout</Link>
                 </button>
            </div> 
            </> 
        }      
    </div>
  )
}

export default Navbar


