import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faMap, faPhone} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerMain'>
      <div className='footer-left'>
        <h2 className='footer-logo'>Booking</h2>
        <ul className='footerItem'>
          <li className='iconItem'>
            <FontAwesomeIcon icon={faEnvelope} className='iconFooter'/>  
            Email Address
            <span className='textfooter'>INFO@WEBHOTEL.VN</span>
          </li>
          <li className='iconItem'>
            <FontAwesomeIcon icon={faEnvelope} className='iconFooter'/> 
            Phone Number
            <span className='textfooter'>0242 242 0777</span>
            </li>
          <li className='iconItem'>
            <FontAwesomeIcon icon={faEnvelope} className='iconFooter'/> 
            Hotel Address
            <span className='textfooter'>Hanoi</span>
            </li>
        </ul>
      </div>
      <div className='footer-right'>
        <h4 className='title'>SIGN UP FOR SPECIAL OFFERS</h4>
        <div className='inputemail'>
        <input type="text" className='email' placeholder='Enter your email'/>
        <button className='btnsubscribe'>subscribe</button>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Footer