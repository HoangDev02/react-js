import React, { useRef } from 'react';
import Menu from '../../compoment/Menu';
import {HOTELS} from '../list/data'
import Booking_1 from '../../compoment/booking/Booking'
const Booking = () => {
  const menuRef = useRef();
  return (
    <div>
        <Menu list={HOTELS} ref={menuRef} />
    </div>
  )
}

export default Booking