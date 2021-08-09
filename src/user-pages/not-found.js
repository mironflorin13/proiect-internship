import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../components/left-hand-panel/left-hand-panel.scss";
import { Context } from "../context/context-provider";
import { ROLES_STATUSES } from "../data/constants";
import "./not-found.scss";

function NotFound() {
  const { roleType } = useContext(Context);
  return (
    <div className="error">
      <h1>Sorry</h1>
      <p>That page cannot be found</p>
      <Link
        to={roleType === ROLES_STATUSES.USER ? "/" : "/admin/challenges"}
        className="home-redirect"
      >
        Back to the homepage...
      </Link>
    </div>
  );
}

export default NotFound;
