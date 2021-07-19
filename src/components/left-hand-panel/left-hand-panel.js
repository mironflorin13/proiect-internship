import React from "react";
import { Link } from "react-router-dom";

import { getChallenges } from "../../data/challenges";
import userPages from "../../data/user-pages";
import adminPages from "../../data/admin-pages";

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
  function switchUserAdminHandler() {
    console.log(props.role);
    props.switchRole();
  }

  return (
    <div className="left-hand-panel">
      <UserCard {...props.userData} />

      {props.role === "User" && (
        <>
          <Credits credits={getNumberOfCredits()} />
          <ExperienceBar currentXP={getInitialCurrentXP()} />
        </>
      )}

      {props.role === "User" && <Menu pagesToShow={userPages}/>}
      {props.role === "Admin" && <Menu pagesToShow={adminPages}/>}

      <Link
        to={props.role === "User" ? "/admin/challenges" : "/"}
        className="left-hand-panel-admin"
        onClick={switchUserAdminHandler}
      >
        Switch to {props.role === "Admin" ? "User" : "Admin"}
      </Link>
    </div>
  );
}

export default LeftHandPanel;
