import "./challenges.scss";
import Card from "../card/Card";
import React from "react";

const DisplayChallenges = ({ title, additionalClass, children }) => {
  return (
    <div className={`challenges-container ${additionalClass}`}>
      <h1 className="challenges-tilte">{title}</h1>
      <div className="challenges-display-cards">{children}</div>
    </div>
  );
};

export default DisplayChallenges;
