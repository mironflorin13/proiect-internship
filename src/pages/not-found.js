import React from "react";
import { Link } from "react-router-dom";

import "../components/left-hand-panel/left-hand-panel.scss";
import "./not-found.scss";

function NotFound() {
  return (
    <div className="cards-overview-container error">
      <h1>Sorry</h1>
      <p>That page cannot be found</p>
      <Link to="/" className="home-redirect"> Back to the homepage... </Link>
    </div>
  );
}

export default NotFound;
