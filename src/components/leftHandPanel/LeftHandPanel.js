import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserCard from "./UserCard";
import getUserInfo from "../../mockFunctions/getUserInfo.js";
import { challenges } from "../../data/challenges";
import "./LeftHandPanel.scss";

import Overview from "../../pages/Overview";
import Challenges from "../../pages/Challenges";
import Shop from "../../pages/Shop";
import Menu from "./Menu";
import ExperienceBar from "./ExperienceBar";

function getLevel() {
  let level = Math.floor(getCurrentXP() / 15) + 1;
  return level;
}

function getCurrentXP() {
  let currentXP = challenges
    .filter((item) => item.status === "validated")
    .reduce((sum, item) => sum + item.xp, 0);
  return currentXP;
}

function getTargetXP() {
  return getLevel() * 15;
}

function getBarWidth() {
  return getCurrentXP() * 100 / 15;
}

function LeftHandPanel(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserInfo(0)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="LeftHandPanel">
        <UserCard {...userData} />
        <ExperienceBar
          level={getLevel()}
          currentXP={getCurrentXP()}
          targetXP={getTargetXP()}
          barWidth={getBarWidth()}
        />
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={() => <Overview />} />
            <Route path="/challenges" exact component={() => <Challenges />} />
            <Route path="/shop" exact component={() => <Shop />} />
          </Switch>
        </Router>

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
