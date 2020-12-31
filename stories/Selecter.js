import React from "react";
import PropTypes from "prop-types";
import "./selecter.css";

export const Selecter = (props) => {
  const { content, src, alt, backgroundColor } = props;

  return (
    <a {...props} className="selecter">
      <img src={src} alt={alt} />
      <span style={{ color: backgroundColor }}>{content}</span>
    </a>
  );
};

Selecter.propTypes = {
  content: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

Selecter.defaultProps = {
  content: "",
  src: "",
  alt: "",
  onClick: undefined,
};
