import React from "react";
import PropTypes from "prop-types";
import "./category.css";

export const Category = (props) => {
  const { selects } = props;

  return (
    <nav className="category">
      <h3 className="category__heading">
        <i className="category__heading-icon fas fa-list"></i>
        Danh mục
      </h3>
      <ul className="category-list">
        {selects.length > 0 &&
          selects.map((select, index) => {
            return (
              <li key={index} className="category-item category-item--active">
                <a href="" className="category-item__link">
                  {select}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
