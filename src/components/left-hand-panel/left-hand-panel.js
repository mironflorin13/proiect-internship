import React from "react";

import { getChallenges } from "../../data/challenges";

import UserCard from "./user-card";
import "./left-hand-panel.scss";
import Menu from "./menu";
import ExperienceBar from "./experience-bar";
import Credits from "./credits";

function getInitialCurrentXP() {
  const challenges = getChallenges();
  return challenges
    .filter(item => item.status === "validated")
    .reduce((sum, item) => sum + item.xp, 0);
}

function getNumberOfCredits() {
  const challenges = getChallenges();
  return challenges
    .filter(item => item.status === "validated")
    .reduce((sum, item) => sum + item.credits, 0);
}

function LeftHandPanel(props) {
  return (
    <div className="LeftHandPanel">
      <UserCard {...props.userData} />

      <Credits credits={getNumberOfCredits()} />
      <ExperienceBar currentXP={getInitialCurrentXP()} />
      <Menu />

      <p className="LeftHandPanel_admin"> Switch to Admin </p>
    </div>
  );
}

export default LeftHandPanel;
