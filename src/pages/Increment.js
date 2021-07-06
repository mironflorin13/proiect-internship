import React, { useState } from "react";

import "../components/leftHandPanel/LeftHandPanel.scss";
import "./Increment.scss";

function Increment(props) {
  const [count, setCount] = useState(props.currentXP);

  function incrementCountHandler() {
    setCount((prevCount) => prevCount + 1);
    props.updateCurrentXPHandler();
  }

  return (
    <div className="cardsOverviewContainer">
      <div className="container">
        <span className="button-text">{count}</span>
        <button onClick={incrementCountHandler} className="button-text">
          +
        </button>
      </div>
    </div>
  );
}

export default Increment;
