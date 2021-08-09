import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ROLES_STATUSES } from "../../data/constants";
import { Context } from "../../context/context-provider";
import userPages from "../../data/user-pages";
import adminPages from "../../data/admin-pages";

import UserCard from "./user-card/user-card";
import "./left-hand-panel.scss";
import Menu from "./menu/menu";
import ExperienceBar from "./experience-bar/experience-bar";
import Credits from "./credits/credits";
import UsersDropdown from "./users-dropdown/users-dropdown";

function LeftHandPanel() {
  const { userData, roleType, hasMultipleRoles } = useContext(Context);
  const { name, jobTitle, image, credits, xp } = userData;

  return (
    <div className="left-hand-panel">
      <UserCard name={name} jobTitle={jobTitle} image={image} />

      <UsersDropdown />

      {roleType === ROLES_STATUSES.USER && (
        <>
          <Credits credits={credits} />
          <ExperienceBar currentXP={xp} />
        </>
      )}

      {roleType === ROLES_STATUSES.USER && <Menu pagesToShow={userPages} />}
      {roleType === ROLES_STATUSES.ADMIN && <Menu pagesToShow={adminPages} />}

      {hasMultipleRoles && (
        <Link
          to={roleType === ROLES_STATUSES.USER ? "/admin/challenges" : "/"}
          className="left-hand-panel-admin"
        >
          Switch to{" "}
          {roleType === ROLES_STATUSES.USER
            ? ROLES_STATUSES.ADMIN
            : ROLES_STATUSES.USER}
        </Link>
      )}
    </div>
  );
}

export default LeftHandPanel;
