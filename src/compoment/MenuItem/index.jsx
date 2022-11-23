import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
  cartclearItem
} from '../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selector';

import ButtonAddRemoveItem from '../ButtonAddRemoveItem/ButtonAddRemoveItem';
import './styles.css';
import { HiPlusSm } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FiHeart,FiStar } from "react-icons/fi";
import { Link } from 'react-router-dom';

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
  cartclearItem
}) => {
  const { id, name, cover_image, price, description, category,rooms,stocked} = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
      <div className="searchItem">
      <img
        src={cover_image}
        alt="hinh"
        className="siImg"
      />       
        <div className="app">
          <FiHeart className="heart"/>
        </div>
      <div className="siDesc">
      <Link to={`/detail/${id}`} className="siTitle">{name}
        <FiStar className="team"/>
        <FiStar className="team"/>
        <FiStar className="team"/>
        <span className="mnt">
        <BiLike className="mnt"/>
        <HiPlusSm className="mnt"/>
        </span>

      </Link>
      <span className="siDistance">Zuiddoost AmsDetdam - Show on map
      <span className=""> </span></span>
      <span className="siTaxiOp">Free airport taxi</span>
      <span className="siSubtitle">
        {category}
      </span>
      <span className="siFeatures">
        {description}
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        {rooms}
      </span>
      </div>
      <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>7.6</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">{price}VND</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        {stocked === false ? (
          <p>Hết phòng</p>
        ): 
            <ButtonAddRemoveItem
            quantity={handleQuantity()}
            handleRemoveItem={() => cartRemoveItem(item)}
            handleAddItem={() => cartAddItem(item)}
          /> 
        }
      </div>
      </div>
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
