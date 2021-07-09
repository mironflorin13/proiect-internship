import "./challengesSection.scss";

import React from "react";

const ChallengesSection = ({ title, children }) => {
  return (
    <div>
      <h1 className="challenges-tilte">{title}</h1>
      <div className="challenges-display-cards">{children}</div>
    </div>
  );
};

export default ChallengesSection;
