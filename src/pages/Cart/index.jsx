import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import EmptyCart from '../../components/Cart/EmptyCart';
// import Footer from '../../components/common/Footer';
// import Logo from '../../components/common/Logo';
import Menu from '../../compoment/BookingNow';
import MenuItem from '../../compoment/MenuItem';
import {HOTELS} from '../list/data'
import Navbar from '../../compoment/navbar/Navbar'
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <Navbar />
      <div className='cart-header'>
      </div>
      {cartCount === 0 ? (
        <div>
          <div className='container'>
            <h1>Bạn chưa đặt phòng</h1>
            <Link to={'/booking'}>Booking Now</Link>
          </div>
          <h4>Sự lựa chọn ưu tiên</h4>
          <Menu list={HOTELS}/>
        </div>
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
