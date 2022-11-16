import React from 'react'
import './relaxtion.css'
import feature1 from '../../img/image-feature-fcb-1-825x735.jpg'
import feature2 from '../../img/image-feature-fcb-17-825x735.jpg'
import feature3 from '../../img/image-feature-fcb-18-825x735.jpg'
import feature4 from '../../img/image-feature-fcb-19-825x735.jpg'
const Relaxtion = () => {
  return (
    <div className='relaxtion'>
        <div className='relax-main'>
            <img src={feature1} alt=""  className='relax-img'/>
            <img src={feature2} alt=""  className='relax-img'/>
            <img src={feature3} alt=""  className='relax-img'/>
            <img src={feature4} alt=""  className='relax-img'/>
        </div>
        <div className='enjoy'>
            <div className='container Wonderful '>
                <div className='WonderfulText'>
                    <h1 className='enjoyTitle'>Enjoy Your Wonderful Vacation</h1>
                    <p>Senotina Hotel Destination For You</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Relaxtion