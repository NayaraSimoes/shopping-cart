import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItens, isCartVisible, setCartVisible } = useContext(AppContext);
  return (
    <button 
      type="button" 
      className="cart__button"
      onClick={() => setCartVisible(!isCartVisible)}
    >
      <IoCartOutline />
      { cartItens.length > 0 &&  <span className="cart-status">{cartItens.length}</span>}
    </button>
  );
}

export default CartButton;
