import React from "react";
import "./button.scss";
import { completeChallenges } from "../../mockFunctions/completeChallenge";
import { quitChallenges } from "../../mockFunctions/quitChallenge";

const Button = ({ type, value, id }) => {
  return <button className={type}>{value}</button>;
};

export default Button;
