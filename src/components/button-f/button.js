import React from "react";
import "./button.scss";

const Button = ({ type, value, handleOnClick }) => (
  <button onClick={handleOnClick} className={type}>
    {value}
  </button>
);

export default Button;
