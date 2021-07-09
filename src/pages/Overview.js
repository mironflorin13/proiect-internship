import React from "react";

import InProgressCompleteChallenge from "../components/inProgressCompleteChallange/InProgressCompleteChallenge";
import "../components/leftHandPanel/LeftHandPanel.scss";

function Overview(props) {
  return (
    <div className="cardsOverviewContainer">
      <InProgressCompleteChallenge userChallengesIds={[1, 2, 3, 4, 5]} />
    </div>
  );
}

export default Overview;
