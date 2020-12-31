import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const Card = (props) => {
  const {
    title,
    src,
    price,
    discount,
    saled,
    branch,
    from,
    numberDisCount,
  } = props;

  return (
    <a
      className="home-product-item"
      href="#"
      style={{ height: 190, width: 300 }}
    >
      <div
        className="home-product-item__img"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
      <h4 className="home-product-item__name">{title}</h4>
      <div className="home-product-item__price">
        <span className="home-product-item__price-old">{price}</span>
        <span className="home-product-item__price-current">{discount}</span>
      </div>
      <div className="home-product-item__action">
        <div className="home-product-item__like home-product-item__like-liked">
          <i className="home-product-item__like-icon-empty far fa-heart"></i>
          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
        </div>
        <div className="home-product-item__rating">
          <i className="home-product-item__star-gold fas fa-star"></i>
          <i className="home-product-item__star-gold fas fa-star"></i>
          <i className="home-product-item__star-gold fas fa-star"></i>
          <i className="home-product-item__star-gold fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <span className="home-product-item__sold">{saled}</span>
      </div>
      <div className="home-product-item__origin">
        <span className="home-product-item__brand">{branch}</span>
        <span className="home-product-item__origin-name">{from}</span>
      </div>
      <div className="home-product-item__favourite">
        <i className="fas fa-check"></i>
        <span>Yêu thích</span>
      </div>
      <div className="home-product-item__sale-off">
        <span className="home-product-item__sale-off-percent">
          {numberDisCount}%
        </span>
        <span className="home-product-item__sale-off-label">GIẢM</span>
      </div>
    </a>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  saled: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  numberDisCount: PropTypes.number.isRequired,
}

Card.defaultProps = {
  title: "",
  src: "",
  price: "",
  discount: "",
  saled:"",
  branch: "",
  from: "",
  numberDisCount:0,
};
