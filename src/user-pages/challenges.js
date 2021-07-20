import React from "react";

import "../components/left-hand-panel/left-hand-panel.scss";
import AvailableChallenges from "../components/available-challenges/available-challenges";

function Challenges({ userId }) {
  return (
    <div className="cards-overview-container">
      <div className="container">
        <AvailableChallenges userId={userId} />
      </div>
    </div>
  );
}

export default Challenges;
