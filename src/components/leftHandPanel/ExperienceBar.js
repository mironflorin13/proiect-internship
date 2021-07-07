import React from "react";

import "./ExperienceBar.scss";

function getInfo(currentXP) {
  let targetXP = 15;
  let level = 1;
  while (currentXP >= targetXP) {
    currentXP -= targetXP;
    targetXP += 15;
    level++;
  }

  let experienceInfo = {
    currentXP: currentXP,
    targetXP: targetXP,
    level: level,
  };

  return experienceInfo;
}

function getBarWidth(currentXP, targetXP) {
  return (currentXP * 100) / targetXP;
}

function ExperienceBar(props) {
  let initialObject = getInfo(props.currentXP);

  return (
    <div className="experience-container">
      <div className="experience-details">
        <span className="level">LEVEL {initialObject.level}</span>
        <span className="level">
          {" "}
          {initialObject.currentXP} / {initialObject.targetXP} XP{" "}
        </span>
      </div>
      <div className="experience-bar">
        <div
          className="inside-bar"
          style={{
            width: `${getBarWidth(
              initialObject.currentXP,
              initialObject.targetXP
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ExperienceBar;
