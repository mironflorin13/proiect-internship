import React from "react";
import { Link } from "react-router-dom";

import "../components/left-hand-panel/left-hand-panel.scss";
import "./not-found.scss";

function NotFound({ role }) {
  return (
    <div className="error">
      <h1>Sorry</h1>
      <p>That page cannot be found</p>
      <Link
        to={role === "User" ? "/" : "/admin/challenges"}
        className="home-redirect"
      >
        Back to the homepage...
      </Link>
    </div>
  );
}

export default NotFound;
