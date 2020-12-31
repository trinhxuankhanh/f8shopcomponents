import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = (props) => {
  const { title, primary } = props;

  const classes = ["home-filter__btn btn"];

  if (primary) classes.push("btn--primary");

  return (
    <button {...props} className={classes.join(" ")}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired
}

Button.defaultProps = {
  title: "",
  primary: false
};
