import React from "react";
import "./button.scss";

const Button = ({ type, value }) => {
  return <button className={`button ${type}`}>{value}</button>;
};

export default Button;
