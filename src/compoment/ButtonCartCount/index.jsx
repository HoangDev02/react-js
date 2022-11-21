import React from 'react';
import { connect } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './styles.css';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
const ButtonCartCount = ({ cartCount }) => {
  const history = useNavigate();
  return (
    <div className='btnCartCount' onClick={() => history.push('/cart')}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <Link to="/cart" className='linkCart'>
        <FontAwesomeIcon icon={faCartShopping}/>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
