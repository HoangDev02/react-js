import React, { forwardRef } from 'react';
import MenuItem from '../MenuItem/index'
import './styles.css';
const Menu = forwardRef(({ list, }, ref) => (
  <div ref={ref} className='menuItem'>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </div>
));

export default Menu;
