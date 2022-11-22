import React from 'react'
import './specialOffer.css'
import banner2 from '../../img/banner-single-1-2.jpg'
import banner1 from '../../img/banner-single-2-1.jpg'
const SpecialOffer = () => {
  return (
    <div className='special'>
        <div className='container'>
            <h1 className='heading-title'>Special Offer</h1>
            <h4 className='heading-text'>ENJOY SPECIAL OFFERS ONLY AT SENOTINA HOTEL</h4>
        </div>
        <div className='special-gallery'>
            <div className='special-main'>
            <div className='special-item-left'>
                <div className='thumd'>
                    <img src={banner2} alt="" srcset="" />
                    <div className='desc'>
                    <div className='desc-cont'>
                        <h3 className='title'>Royal Room 13.04% Discount</h3>
                        <div className='wrap-price'>
                            <span className='old-price'>230.00$</span>
                            <span>to</span>
                            <span className='price'>200.00$</span>
                            <span className='suffix'>/Day</span>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className='special-item-right'>
                <div className='special-item-top'>
                    <div className="desc">
                        <h3 className='title-top'>Royal Room 13.04% Discount</h3>
                        <div className='wrap-price'>
                            <span className='old-price'>230.00$</span>
                            <span>to</span>
                            <span className='price'>200.00$</span>
                            <span className='suffix'>/Day</span>
                        </div>
                        <div className="excerpt">
                            <p>Small Room Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors. Lorem…</p>
                        </div>
                        <button className='specialBtn'>View More</button>
                    </div>
                    <div className='specialImg'>
                        <img src={banner1} alt="" />
                    </div>
                </div>

                <div className='special-item-bottom'>
                    <div className='specialImg'>
                        <img src={banner1} alt="" />
                    </div>
                    <div className="desc">
                        <h3 className='title-top'>Royal Room 13.04% Discount</h3>
                        <div className='wrap-price'>
                            <span className='old-price'>230.00$</span>
                            <span>to</span>
                            <span className='price'>200.00$</span>
                            <span className='suffix'>/Day</span>
                        </div>
                        <div className="excerpt">
                            <p>Small Room Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors. Lorem…</p>
                        </div>
                        <button className='specialBtn'>View More</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        <div className='container'>
            <p className='special-text'>Every month senotina hotel has different special offers, please follow up to get the latest and fastest deals.</p>

        </div>
    </div>
  )
}

export default SpecialOffer
