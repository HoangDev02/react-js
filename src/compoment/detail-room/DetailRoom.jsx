import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./detail-room.css"

const DetailRoom = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className='detail-room-page'>
      <div className='header'>
        <div className="main">
          <h1>Royal Room</h1>
          <p>
            “ APARTMENTS TAILORED TO YOUR HIGHEST STANDARDS  ”
          </p>
        </div>
      </div>
      <div className="banner-slide">
        <Slider {...settings}>
          <div className="slide-item">
            <img src="https://pathhotel.webhotel.vn/images/image-room-7-980x768.jpg" alt="" />
          </div>
          <div className="slide-item">
            <img src="https://pathhotel.webhotel.vn/images/bg-title-room-980x768.jpg" alt="" />
          </div>
          <div className="slide-item">
            <img src="https://pathhotel.webhotel.vn/images/image-room-7-980x768.jpg" alt="" />
          </div>
          <div className="slide-item">
            <img src="https://pathhotel.webhotel.vn/images/bg-title-room-980x768.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default DetailRoom