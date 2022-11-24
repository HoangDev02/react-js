import React from 'react'
import Register from '../../compoment/registerForm'
import { Link } from 'react-router-dom'
import './registerPage.css'
const RegisterPages = () => {
  return (
    <div >
        <Register/>
        <div className='login'>
          <Link to={'/auth/signin'}>Login</Link>
        </div>
    </div>
  )
}

export default RegisterPages