import React from 'react'
import { Link } from 'react-router-dom';
import { imgArr } from "./data";
import "./room.css"

const Room = () => {




  return (
    <div  className='room-page'>
      <div className='header'>
        <div className="main">
          <h1>Room</h1>
          <p>
            “ LUXURIOUS AND FULLY EQUIPPED ROOM ”
          </p>
        </div>
      </div>
      <div className="list-room">
   
        <div className="content-room">
        {
            imgArr.map((img, index) => {
              return <div className="item-card" key={index}> 
                      <div className="card-img">
                        <div className="price-tag">
                          <h3>Price: <span>{img.price} / Day</span></h3>
                       </div>
                       <Link to="#"><img src={img.link} alt="" /></Link>
                      </div>
                      <div className="card-body">
                      <h3 className="card-name">
                      {img.tiltle} 
                       </h3>
                       <div className="card-detail">
                        {img.detail}
                       </div>
                      </div> 
                      </div> 
            })
          }

        </div>
        <div className="special-room">
          <div className="special-room-detail">
            <div className="container">
              <h3 className="room-title">
                Royal Room
              </h3>
              <div className="room-price">
                <span className="price-label">From </span>
                <span className="price">200.000$</span>
                <span className="price-suffix">/ Day</span>
              </div>
              <div className="room-meta">
                <ul>
                  <li>
                    <p>Room type:
                      <span> King bed</span>
                    </p>
                  </li>
                  <li>
                    <p>Bed:
                      <span> 2 beds</span>
                    </p>
                  </li>
                  <li>
                    <p>Guests:
                      <span> 4 guests</span>
                    </p>
                  </li>
                  <li>
                    <p>Room type:
                      <span> King bed</span>
                    </p>
                  </li>
                  <li>
                    <p>Room type:
                      <span> King bed</span>
                    </p>
                  </li>
                </ul>
              </div>
              <Link to="/detail/1" className="btn-book-now">view room</Link>
            </div>
          </div>
          <div className="special-room-img">
            <img src="https://pathhotel.webhotel.vn/images/banner-single-1-2.jpg" alt="" />
          </div>
        </div>
        <div className="content-room">
        {
            imgArr.map((img, index) => {
              return <div className="item-card" key={index}> 
                      <div className="card-img">
                        <div className="price-tag">
                          <h3>Price: <span>{img.price} / Day</span></h3>
                       </div>
                       <Link to="#"><img src={img.link} alt="" /></Link>
                      </div>
                      <div className="card-body">
                      <h3 className="card-name">
                      {img.tiltle} 
                       </h3>
                       <div className="card-detail">
                        {img.detail}
                       </div>
                      </div> 
                      </div> 
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Room