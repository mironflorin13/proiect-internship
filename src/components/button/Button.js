import React from "react";
import "./button.scss";

const Button = ({ type, value, id }) => {
  return <button className={type}>{value}</button>;
};

export default Button;
