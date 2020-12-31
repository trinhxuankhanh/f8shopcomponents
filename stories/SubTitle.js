import React from "react";
import PropTypes from "prop-types";
import "./subtitle.css";

export const SubTitle = (props) => {
  return (
    <a href="" className="footer-item__link">
      {props.sub}
    </a>
  );
};

SubTitle.propTypes = {
  sub: PropTypes.string.isRequired
}


SubTitle.defaultProps = {
  sub:""
};
