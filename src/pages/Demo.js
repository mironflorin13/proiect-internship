import React, { useState } from "react";

import "../components/leftHandPanel/LeftHandPanel.scss";
import "./Demo.scss";
import ExperienceBar from "../components/leftHandPanel/ExperienceBar";

function Demo() {
  const [count, setCount] = useState(10);

  function incrementCountHandler() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="cardsOverviewContainer">
      <div className="container">
        <ExperienceBar currentXP={count} />
        <span className="button-text counter">{count}</span>
        <button onClick={incrementCountHandler} className="button-text">
          +
        </button>
      </div>
    </div>
  );
}

export default Demo;
