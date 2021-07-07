import React from "react";
import "./button.scss";

const Button = ({ type, value, id, modifyStatusFunction }) => {
  return (
    <button onClick={() => modifyStatusFunction(id)} className={type}>
      {value}
    </button>
  );
};

export default Button;
