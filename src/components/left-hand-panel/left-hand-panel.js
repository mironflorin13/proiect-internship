import React from "react";

import { getChallenges } from "../../data/challenges";

import UserCard from "./user-card/user-card";
import "./left-hand-panel.scss";
import Menu from "./menu/menu";
import ExperienceBar from "./experience-bar/experience-bar";
import Credits from "./credits/credits";

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
  // const [switchUserAdmin, setSwitchUserAdmin] = useState("Admin");

  function switchUserAdminHandler() {
    console.log(props.role);
    props.switchRole();
  }

  return (
    <div className="LeftHandPanel">
      <UserCard {...props.userData} />

      {props.role === "User" && (
        <>
          <Credits credits={getNumberOfCredits()} />
          <ExperienceBar currentXP={getInitialCurrentXP()} />
        </>
      )}

      <Menu pagesToShow={props.role} />

      <a
        // href="/admin-challenges"
        className="LeftHandPanel_admin"
        onClick={switchUserAdminHandler}
      >
        Switch to {props.role === "Admin" ? "User" : "Admin"}
      </a>
    </div>
  );
}

export default LeftHandPanel;
