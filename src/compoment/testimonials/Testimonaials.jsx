import React from 'react'
import './testimonaials.css'
import avatar from '../../img/testti.jpg'
const Testimonaials = () => {
  return (
    <div className='testimonial' >
        <div className='container'>
            <div className='title'>
                <h1>Testimonials</h1>
                <p className='titleText'>WHAT OUR HAPPY CUSTOMERS SAID ABOUT US</p>
            </div>
            <div className='center'>
                <img src={avatar} alt=""  className='avatar'/>
                <p className='centerText'>
                Beyond Expectations – Ultimate Proposal Experience! All I have to say is ‘thank you’ to all the staff that have participated in the proposal, have pampered us and have smiled to us:-) For those who are planning for your special events, I highly recommend
                you to try this special bespoke service. And you will be amazed. The pool/lagoon was beautiful, clean and we spent the whole morning there enjoying the sunshine.         
                </p>
                <p className='name'>
                    JULIA CRUSH
                </p>
                <span className='meta-add'>
                     Ontario, OR                        
                </span>
            </div>
        </div>
    </div>
  )
}

export default Testimonaials
