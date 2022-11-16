import React from 'react'
import Team from '../team/Team';

const HotelsTable = ({ hotels, filterText, inStockOnly }) => {
    const rows = []
    let lastCategory = null;
    hotels.forEach((hotel) => {
        if( hotel.name.toLowerCase().indexOf(filterText.toLowerCase())=== -1) {
            return
        }
        if (inStockOnly && !hotel.stocked) {
            return;
        }
        rows.push(
            <Team
              hotels={hotel}
              key={hotel.name} />
        );
        lastCategory = hotel.name;
    });
  return (
    <div>{rows}</div>
  )
}

export default HotelsTable