import "./challenges.scss";
import Card from "../card/Card";
import React from "react";

const Challenges = ({ title, children }) => {
  return (
    <div>
      <h1 className="challenges-tilte">{title}</h1>
      <div className="challenges-display-cards">{children}</div>
    </div>
  );
};

export default Challenges;
