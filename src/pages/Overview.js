import React from "react";

import InProgressCompleteChallenge from "../components/inProgressCompleteChallange/InProgressCompleteChallenge";
import "../components/leftHandPanel/LeftHandPanel.scss";

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
