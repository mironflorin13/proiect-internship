import React from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../../data/users";
import { getChallenges } from "../../data/challenges";
import { CHALLENGE_STATUSES } from "../../data/constants";
import userPages from "../../data/user-pages";
import adminPages from "../../data/admin-pages";

import UserCard from "./user-card/user-card";
import "./left-hand-panel.scss";
import Menu from "./menu/menu";
import ExperienceBar from "./experience-bar/experience-bar";
import Credits from "./credits/credits";

function getInitialCurrentXP(userId) {
  let sum = 0;
  const users = getUsers();
  const challenges = getChallenges();
  const validatedChallenges = users
    .find(user => user.id === userId)
    .challenges.filter(
      challenge => challenge.status === CHALLENGE_STATUSES.VALIDATED
    );

  validatedChallenges.forEach(challenge => {
    sum += challenges.find(ch => ch.id === challenge.id).xp;
  });
  return sum;
}

function getNumberOfCredits(userId) {
  let sum = 0;
  const users = getUsers();
  const challenges = getChallenges();
  const validatedChallenges = users
    .find(user => user.id === userId)
    .challenges.filter(
      challenge => challenge.status === CHALLENGE_STATUSES.VALIDATED
    );

  validatedChallenges.forEach(challenge => {
    sum += challenges.find(ch => ch.id === challenge.id).credits;
  });
  return sum;
}

function LeftHandPanel({
  hasMultipleRoles,
  name,
  jobTitle,
  image,
  roleType,
  switchRole,
  userId,
}) {
  function switchUserAdminHandler() {
    switchRole();
  }

  return (
    <div className="left-hand-panel">
      <UserCard name={name} jobTitle={jobTitle} image={image} />

      {roleType !== "Admin" && (
        <>
          <Credits credits={getNumberOfCredits(userId)} />
          <ExperienceBar currentXP={getInitialCurrentXP(userId)} />
        </>
      )}

      {roleType === "User" && <Menu pagesToShow={userPages} />}
      {roleType === "Admin" && <Menu pagesToShow={adminPages} />}

      {hasMultipleRoles && (
        <Link
          to={roleType === "User" ? "/admin/challenges" : "/"}
          className="left-hand-panel-admin"
          onClick={switchUserAdminHandler}
        >
          Switch to {roleType === "Admin" ? "User" : "Admin"}
        </Link>
      )}
    </div>
  );
}

export default LeftHandPanel;
