import React from "react";
import "./button.scss";

const Button = ({ type, value, handleOnClick, special }) => (
  <button
    onClick={handleOnClick}
    className={type}
    style={special ? { paddingLeft: "35px", paddingRight: "35px" } : null}
  >
    {value}
  </button>
);

export default Button;
