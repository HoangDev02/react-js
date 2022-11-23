import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detail-room.css"
import TabContent from './tab-content';
import { Link,useParams } from 'react-router-dom';
import { HOTELS } from '../../pages/list/data';

import { imgArr } from './imgArr';
const DetailRoom = () => {
  const { id } = useParams();

  const hotels = HOTELS.find((hotel) => hotel.id === id);
  const { name, cover_image, price, img_1, img_2,roomType,kingbed } = hotels;
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  }


  return (
    <div className='detail-room-page'>
      <div className='header'>
        <div className="main">
          <h1>{name}</h1>
          <p>
            “ APARTMENTS TAILORED TO YOUR HIGHEST STANDARDS  ”
          </p>
        </div>
      </div>
      <div className="banner-slide">
        <Slider {...settings}>
          {
            imgArr.map((img, index) => {
              return <div className="slide-item" key={index}>
                <img src={img.link} alt="" />
              </div>
            })
          }
        </Slider>
      </div>
      <div className="infor-room">
        <div className="tab">
          <TabContent />
        </div>
        <div className="price">
          <div className="price-content">
            <div className="price-per-day">
              <p>Price: <span>{price}$/Day</span></p>
            </div>
            <div className="booking">
              <button className='btn-book'>Book now</button>
            </div>
            <ul className="room-type">
              <li className="type-item">Room Type: {roomType} <span> King Bed: {kingbed}</span></li>
              <li className="type-item">Room Type :<span> King Bed</span></li>
              <li className="type-item">Room Type :<span> King Bed</span></li>
              <li className="type-item">Room Type :<span> King Bed</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="other-room">
        <div className="title">
          <h2>Other Rooms</h2>
          <p className='sub-title'>YOU MAY ALSO LIKE OTHER ROOMS</p>
        </div>
        <div className="single-room">
          <Slider {...settings}>
            {
              imgArr.map((img, index) => {
                return <div className="card-room" key={index}>
                  <div className="card-discount">Sale {img.discount}</div>
                  <div className="card-img">
                    <img src={img.link} alt="" />
                  </div>
                  <div className="price-tag">
                    <p>Price : <span>{img.price}</span><span>- {img.newPrice} / </span> Day</p>
                  </div>
                  <div className="card-body">
                    <h3 className="card-name">Classic Room</h3>
                    <p>Basic Room Suite has a comfortable queen size or twin bed, a sitting area, separate…</p>
                    <Link to="#" className="card-link">View room</Link>
                  </div>
                </div>
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default DetailRoom