import React from 'react';
import propTypes from 'prop-types';
import { IoCartOutline } from 'react-icons/io5';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  return (
    <section className="product-card">

      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button type="button" className="button__add-cart">
        <IoCartOutline />
      </button>
    </section>
  );
}

//http://http2.mlstatic.com/D_932360-MLA46545868431_062021-W.jpg

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

