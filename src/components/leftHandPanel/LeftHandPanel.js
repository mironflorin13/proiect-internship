import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserCard from "./UserCard";
import getUserInfo from "../../mockFunctions/getUserInfo.js";
import { challenges } from "../../data/challenges";
import "./LeftHandPanel.scss";

import Overview from "../../pages/Overview";
import Challenges from "../../pages/Challenges";
import Shop from "../../pages/Shop";
import Increment from "../../pages/Increment";
import Menu from "./Menu";
import ExperienceBar from "./ExperienceBar";

function getInitialCurrentXP() {
  let currentXP = challenges
    .filter((item) => item.status === "validated")
    .reduce((sum, item) => sum + item.xp, 0);

  return currentXP;
}

function getInfo(currentXP) {
  let targetXP = 15;
  let level = 1;
  while (currentXP >= targetXP) {
    currentXP -= targetXP;
    targetXP += 15;
    level++;
  }

  return [currentXP, targetXP, level];
}

let initialArray = getInfo(getInitialCurrentXP());

function getBarWidth(currentXP, targetXP) {
  return (currentXP * 100) / targetXP;
}

function LeftHandPanel(props) {
  const [userData, setUserData] = useState({});
  const [currentXPState, setCurrentXPState] = useState(initialArray);
  const [numberOfClicks, setNumberOfClicks] = useState(1);

  useEffect(() => {
    getUserInfo(0)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let initialCurrentXPValue = initialArray[0];
  function updateCurrentXP() {
    setNumberOfClicks((prevState) => ++prevState);
    let updatedArray = getInfo(initialCurrentXPValue + numberOfClicks);
    setCurrentXPState(updatedArray);
  }

  return (
    <>
      <div className="LeftHandPanel">
        <UserCard {...userData} />
        <ExperienceBar
          level={currentXPState[2]}
          currentXP={currentXPState[0]}
          targetXP={currentXPState[1]}
          barWidth={getBarWidth(currentXPState[0], currentXPState[1])}
        />
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={() => <Overview />} />
            <Route path="/challenges" exact component={() => <Challenges />} />
            <Route path="/shop" exact component={() => <Shop />} />
            <Route
              path="/increment"
              exact
              component={() => (
                <Increment
                  currentXP={currentXPState[0]}
                  updateCurrentXPHandler={updateCurrentXP}
                />
              )}
            />
          </Switch>
        </Router>

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
