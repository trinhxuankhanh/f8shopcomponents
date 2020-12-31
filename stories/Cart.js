import React from "react";
import PropTypes from "prop-types";
import "./cart.css";
import { CartItem } from "./CartItem";

export const Cart = (props) => {
  const { alt, src, number, isShow, products } = props;

  const classes = ["header__cart-list"];
  if (products.length === 0) classes.push("header__cart-list--no-cart");
  return (
    <div className="cart">
      <img src={src} alt={alt}></img>
      <sup>{number}</sup>
      {isShow && (
        <div className={classes.join(" ")}>
          <span className="header__cart-list-no-cart-msg">
            Chưa có sản phẩm
          </span>

          {products.length > 0 && (
            <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
          )}
          <ul className="header__cart-list-item">
            {products.length > 0 &&
              products.map((product, index) => {
                return <CartItem key={index} {...product} />;
              })}
          </ul>
          {products.length > 0 && (
            <a href="#" className="header__cart-view btn btn--primary">
              Xem giỏ hàng
            </a>
          )}
        </div>
      )}
    </div>
  );
};
