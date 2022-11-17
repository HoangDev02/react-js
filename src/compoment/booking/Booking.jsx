import React from 'react'
import './booking.css'
import { addDays } from 'date-fns';
import { useState } from 'react';
import {DateRangePicker} from 'react-date-range'
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Booking = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
  return (
    <div className='bookingMain'>
       <div className='container'>
            <h1 className='titleBooking'>BOOKING</h1>
            <p>Booking with us means you get</p>
            <div className='iconBooking'>
                <FontAwesomeIcon icon={faCheck} className='iconCheck'/>
                <span>Best Price Guarantee </span>
            </div>
            <div className='iconBooking'>
                <FontAwesomeIcon icon={faCheck} className='iconCheck'/>
                <span>Best value  </span>
            </div>
            <div className='iconBooking'>
                <FontAwesomeIcon icon={faCheck} className='iconCheck'/>
                <span>Support 24/7</span>
            </div>
            <div className='iconBooking'>
                <FontAwesomeIcon icon={faCheck} className='iconCheck'/>
                <span>Friendly staffs  </span>
            </div>
            <div className='iconBooking'>
                <FontAwesomeIcon icon={faCheck} className='iconCheck'/>
                <span>Early Check-in & Late Check-outs</span>
            </div>
            <div className='bookingItem'>
                <div className='Booking-l'>
                    <h1>Booking Now</h1>
                </div>
                <div className='booking-r'>
                    <DateRangePicker className='bookingDate'
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                    />
                    <div className='bookingNote'>
                        <div className='square'></div>
                        <p className='noteDay selectedDates'>Selected Dates</p>
                        <div className='noAvailability'></div>
                        <p className='noteDay availability'>No Availability</p>
                        <button className='btnBooking'>Search Availability</button>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Booking