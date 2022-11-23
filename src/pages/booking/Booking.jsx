import React, { useRef } from 'react';
import BookingNow from '../../compoment/BookingNow';
import {HOTELS} from '../list/data'

const Booking = () => {
  const menuRef = useRef();
  return (
    <div>
        <BookingNow list={HOTELS} ref={menuRef} />
    </div>
  )
}

export default Booking