import React from "react";
import PropTypes from "prop-types";
import "./footer.css";

export const Footer = (props) => {
  return (
    <div className="footer__bottom">
      <div className="grid wide">
        <p className="footer__text">{props.title}</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired
}


Footer.defaultProps = {
  title:""
};
