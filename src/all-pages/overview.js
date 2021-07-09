import React from "react";

import InProgressCompleteChallenge from "../components/in-progress-complete-challange/in-progress-complete-challenge";
import "../components/left-hand-panel/left-hand-panel.scss";

function Overview({ userData }) {
  return (
    userData !== undefined && (
      <div className="cardsOverviewContainer">
        <InProgressCompleteChallenge userChallengesIds={userData} />
      </div>
    )
  );
}

export default Overview;
