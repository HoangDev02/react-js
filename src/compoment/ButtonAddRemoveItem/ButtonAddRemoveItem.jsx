import React from 'react';
import './styles.css';
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className='btnAddRemove'>
      {quantity !== 0 ? (
        <div className='btnAddRemove-positive'>
          <i
            class='fa fa-minus'
            aria-hidden='true'
            onClick={handleRemoveItem}
          ><FontAwesomeIcon icon={faMinus}/></i>
          <span> {quantity}</span>
          <i class='fa fa-plus' aria-hidden='true' onClick={handleAddItem}>
            <FontAwesomeIcon icon={faPlus}/>
          </i>
        </div>
      ) : (
        <div onClick={handleAddItem} className='btnAddRemove-negative'>
          <span>Đặt Phòng Ngay</span>
          <i class='fa fa-plus' aria-hidden='true'></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
