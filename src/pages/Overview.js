import React from "react";

import InProgressCompleteChallenge from "../components/inProgressCompleteChallange/InProgressCompleteChallenge";
import "../components/leftHandPanel/LeftHandPanel.scss";

function Overview(props) {
  return (
    <div className="cardsOverviewContainer">
      <InProgressCompleteChallenge />
    </div>
  );
}

export default Overview;
