import React from "react";

import "./ExperienceBar.scss";

function ExperienceBar(props) {
  return (
    <div className="experience-container">
      <div className="experience-details">
        <span className="level">LEVEL {props.level}</span>
        <span className="level">
          {" "}
          {props.currentXP} / {props.targetXP} XP{" "}
        </span>
      </div>
      <div className="experience-bar">
        <div
          className="inside-bar"
          style={{ width: `${props.barWidth}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ExperienceBar;
