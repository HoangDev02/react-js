import React from 'react'
import './breakFast.css'
import icon from '../../img/icon-31.png'
const BreakFast = () => {
  return (
    <div className='card-view'>
        <div className='container'>
            <div className='card-item'>
                <div className='row'>
                    <img src={icon} alt="" />
                    <h5>Free Breakfast Every Day</h5>
                    <p className='rowText'>Every day in the morning we have a special buffe and it's free. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='row'>
                    <img src={icon} alt="" />
                    <h5>Free Breakfast Every Day</h5>
                    <p className='rowText'>Every day in the morning we have a special buffe and it's free. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='row'>
                    <img src={icon} alt="" />
                    <h5>Free Breakfast Every Day</h5>
                    <p className='rowText'>Every day in the morning we have a special buffe and it's free. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default BreakFast