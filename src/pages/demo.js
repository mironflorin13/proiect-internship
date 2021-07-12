import React, { useState } from "react";

<<<<<<< Updated upstream:src/pages/demo.js
import "../components/left-hand-panel/left-hand-panel.scss";
import "./demo.scss";
import ExperienceBar from "../components/left-hand-panel/experience-bar";
=======
import "../components/leftHandPanel/LeftHandPanel.scss";
import "./Demo.scss";
import ExperienceBar from "../components/leftHandPanel/experience-bar";
>>>>>>> Stashed changes:src/pages/Demo.js

function Demo() {
  const [count, setCount] = useState(10);

  function incrementCountHandler() {
<<<<<<< Updated upstream:src/pages/demo.js
    setCount(prevCount => prevCount + 1);
=======
    setCount(prevCount => prevCount + 5);
>>>>>>> Stashed changes:src/pages/Demo.js
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
