import React from "react";
import PropTypes from "prop-types";
import "./search.css";

export const Search = (props) => {
  const { histories, selects } = props;

  return (
    <div className="header__search">
      <div className="header__search-input-wrap">
        <input
          type="text"
          className="header__search-input"
          placeholder="Nhập để tìm kiếm sản phẩm"
        />

        <div className="header__search-history">
          <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
          <ul className="header__search-history-list">
            {histories.length > 0 &&
              histories.map((history, index) => {
                return (
                  <li key={index} className="header__search-history-item">
                    <a href="">{history}</a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="header__search-select">
        <span className="header__search-select-label">Trong Shop</span>
        <img
          className="header__search-select-icon fas fa-angle-down"
          src="https://www.flaticon.com/svg/static/icons/svg/892/892498.svg"
        ></img>
        <ul className="header__search-option">
          {selects.length > 0 &&
            selects.map((select, index) => {
              return (
                <li
                  key={index}
                  className="header__search-option-item header__search-option-item--active"
                >
                  <span>{select}</span>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/845/845646.svg"
                    className="fas fa-check"
                  ></img>
                </li>
              );
            })}
        </ul>
      </div>
      <button className="header__search-btn">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/482/482631.svg"
          className="header__search-btn-icon fas fa-search"
        ></img>
      </button>
    </div>
  );
};

Search.propTypes = {
  histories: PropTypes.array.isRequired,
  selects: PropTypes.array.isRequired
}

Search.defaultProps = {
  histories: [],
  selects: []
};