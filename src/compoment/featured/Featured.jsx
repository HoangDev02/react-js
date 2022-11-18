import React from 'react'
import './featured.css'
import banner1 from '../../img/banner-single-1-2.jpg'
import banner2 from '../../img/banner-single-2-1.jpg'
import room from '../../img/room.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed, faPerson} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const Featured = () => {
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/description");
    };
  return (
    <div className='featured'>
        <div className='entry'>
            <div className='entrycontainer'>
                <div className='entry-left'>
                    <h1 className='entryTitle'>Hotels to celebrate life</h1>
                    <p className='entryText'>We are proud to say that since our opening in ’98 we have been serving our visitors in the best possible way. In Moana Hotel, where each one of our 17 rooms – with its own personality and style – will help you to feel at home and to live the “Moana experience as you would never have imagined it.</p>
                    <p className='entryText'>Make memories at Moana hotel, Amelia Island, where southern charm, magnificent scenery and casually elegant surroundings exemplify the gentle ambience of this barrier island’s luxury beachfront resort.</p>
                    <button className='entryBtn' onClick={handleSearch}>Read More</button>
                </div>
                <div className='entry-right'>
                    <img src={banner1} alt="" className='imgBanner'/>
                    <img src={banner2} alt="" className='imgBanner'/>
                </div>
            </div>
        </div>
        <div className='room'>
            <div className='room-left'>
                <img src={room} alt=""  className='imgRoom'/>
            </div>
             <div className='room-right'>
                <h1>Basic Room</h1>
                <p><span>50.00$</span>/day</p>
                <div className='roomIeam'>
                    <FontAwesomeIcon icon={faBed} className= 'roomIcon'/>
                    <p className='roomText'>Bed: 3</p>
                </div>
                <div className='roomIeam'>
                    <FontAwesomeIcon icon={faPerson} className= 'roomIcon'/>
                    <p className='roomText'>Guests: 6</p>
                </div>
                <p className='roomcontext'>Basic Room Suite has a comfortable queen size or twin bed, a sitting area, separate desk and bathroom with walk-in rain dance shower or a bath and shower and modern art and neutral colors. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non elementum turpis. Fusce suscipit nisl quis pretium varius. Nam id mi at eros fringilla finibus non nec nisi.</p>
                <button className='entryBtn' onClick={handleSearch}>View Room</button>
            </div>
        </div>
    </div>
  )
}

export default Featured