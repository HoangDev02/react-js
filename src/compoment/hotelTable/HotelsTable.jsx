import React from 'react'
import MenuItem from '../MenuItem';
const HotelsTable = ({ hotels, filterText, inStockOnly }) => {
    const rows = []
    // let lastCategory = null;
    hotels.map( (hotel) => {
        if( hotel.name.toLowerCase().indexOf(filterText.toLowerCase())=== -1) {
            return
        }
        if (inStockOnly && !hotel.stocked) {
            return;
        }
        rows.push(
          <MenuItem
            item={hotel}
            key={hotel.id}
          />
        )
    
   });
  return (
    <div>{rows}</div>
  )
}

export default HotelsTable