import React from "react";

import InProgressCompleteChallenge from "../components/in-progress-complete-challange/in-progress-complete-challenge";
import "../components/left-hand-panel/left-hand-panel.scss";

function Overview({ userId }) {
  return (
    <div className="cardsOverviewContainer">
      <InProgressCompleteChallenge userId={userId} />
    </div>
  );
}

export default Overview;
