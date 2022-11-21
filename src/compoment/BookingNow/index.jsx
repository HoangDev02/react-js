import React, { forwardRef } from 'react';
import MenuItem from '../MenuItem/index'
import './styles.css';
import ButtonCartCount from '../ButtonCartCount/index'
const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    <ButtonCartCount/>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </main>
));

export default Menu;
