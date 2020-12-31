import React from "react";
import PropTypes from "prop-types";
import "./pagination.css";

export const Panigation = (props) => {
  const { panies } = props;

  return (
    <ul className="pagination home-product__pagination">
      <li className="pagination-item">
        <a href="#2" className="pagination-item__link">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/271/271220.svg"
            alt="icon"
          />
        </a>
      </li>
      {panies.length > 0 &&
        panies.map((pani) => {
          return (
            <li key={pani} className="pagination-item pagination-item--active">
              <a href="" className="pagination-item__link">
                {pani}
              </a>
            </li>
          );
        })}
      <li className="pagination-item">
        <a href="#1" className="pagination-item__link">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/271/271228.svg"
            alt="icon"
          />
        </a>
      </li>
    </ul>
  );
};

Panigation.propTypes = {
  panies: PropTypes.array.isRequired
}


Panigation.defaultProps = {
  panies:[]
};
