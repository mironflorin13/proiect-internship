import "./challenges-section.scss";

import React from "react";

const ChallengesSection = ({ title, children }) => (
  <div className="section-container">
    <h1 className="challenges-tilte">{title}</h1>
    <div className="challenges-display-cards">{children}</div>
  </div>
);

export default ChallengesSection;
