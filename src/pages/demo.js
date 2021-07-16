import React, { useState } from "react";

import "../components/left-hand-panel/left-hand-panel.scss";
import "./demo.scss";
import ExperienceBar from "../components/left-hand-panel/experience-bar/experience-bar";

function Demo() {
  const [count, setCount] = useState(10);

  function incrementCountHandler() {
    setCount(prevCount => prevCount + 5);
  }

  return (
    <div className="cards-overview-container">
      <div className="container">
        <ExperienceBar currentXP={count} />
        <span className="button-text counter">{count}</span>
        <button onClick={incrementCountHandler} className="button-text btn-demo">
          +
        </button>
      </div>
    </div>
  );
}

export default Demo;
