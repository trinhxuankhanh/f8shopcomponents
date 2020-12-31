import React from "react";
import PropTypes from "prop-types";

export const Title = (props) => {
  return <h3 className="footer__heading">{props.title}</h3>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired
}


Title.defaultProps = {
  title:""
};