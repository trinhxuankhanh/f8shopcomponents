import React from "react";
import "./cartitem.css";
export const CartItem = (props) => {
  const { src, alt, title, price, size, quantity, type } = props;

  return (
    <li className="header__cart-item">
      <img src={src} alt={alt} className="header__cart-img" />
      <div className="header__cart-item-info">
        <div className="header__cart-item-head">
          <h5 className="header__cart-item-name">{title}</h5>
          <div className="header__cart-item-price-wrap">
            <span className="header__cart-item-price">{price}</span>
            <span className="header__cart-item-multiply">{size}</span>
            <span className="header__cart-item-quantity">{quantity}</span>
          </div>
        </div>
        <div className="header__cart-item-body">
          <span className="header__cart-item-description">{type}</span>
          <span className="header__cart-item-remove">Xóa</span>
        </div>
      </div>
    </li>
  );
};
