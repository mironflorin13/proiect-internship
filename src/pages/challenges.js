import React from "react";

import "../components/left-hand-panel/left-hand-panel.scss";
import AvailableChallenges from "../components/available-challenges/available-challanges";

function Challenges({ userId }) {
  return (
    <div className="cardsOverviewContainer">
      <div className="container">
        <AvailableChallenges userId={userId} />
      </div>
    </div>
  );
}

export default Challenges;
