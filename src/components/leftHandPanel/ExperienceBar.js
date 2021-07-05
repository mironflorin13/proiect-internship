import React from "react";

import { challenges } from "../../data/challenges";

function ExperienceBar() {
  return <p>{challenges.reduce((sum, user) => sum + user.xp, 0)}</p>;
}

export default ExperienceBar;
