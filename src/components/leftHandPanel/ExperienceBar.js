import React from "react";

import "./ExperienceBar.scss";

function getCurrentXPTargetAndLevelInfo(currentXP) {
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
  let initialCurrentXPTargetAndLevelObject = getCurrentXPTargetAndLevelInfo(
    props.currentXP
  );

  return (
    <div className="experience-container">
      <div className="experience-details">
        <span className="level">
          LEVEL {initialCurrentXPTargetAndLevelObject.level}
        </span>
        <span className="level">
          {" "}
          {initialCurrentXPTargetAndLevelObject.currentXP} /{" "}
          {initialCurrentXPTargetAndLevelObject.targetXP} XP{" "}
        </span>
      </div>
      <div className="experience-bar">
        <div
          className="inside-bar"
          style={{
            width: `${getBarWidth(
              initialCurrentXPTargetAndLevelObject.currentXP,
              initialCurrentXPTargetAndLevelObject.targetXP
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ExperienceBar;
