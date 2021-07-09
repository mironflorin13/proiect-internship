import React from "react";

import UserCard from "./UserCard";
import "./LeftHandPanel.scss";
import { getChallenges } from "../../data/challenges";

import Menu from "./Menu";
import ExperienceBar from "./ExperienceBar";
import Credits from "./Credits";

function getInitialCurrentXP() {
  let challenges = getChallenges();
  let currentXP = challenges
    .filter((item) => item.status === "validated")
    .reduce((sum, item) => sum + item.xp, 0);

  return currentXP;
}

function getNumberOfCredits() {
  let challenges = getChallenges();
  let credits = challenges
    .filter((item) => item.status === "validated")
    .reduce((sum, item) => sum + item.credits, 0);

  return credits;
}

function LeftHandPanel(props) {
  return (
    <>
      <div className="LeftHandPanel">
        <UserCard {...props.userData} />

        <Credits credits={getNumberOfCredits()} />
        <ExperienceBar currentXP={getInitialCurrentXP()} />
        <Menu />

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
