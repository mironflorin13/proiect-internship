import React from "react";
import { Link, withRouter } from "react-router-dom";

// import "./LeftHandPanel.scss";
import "./Navigation.scss";

function Navigation(props) {
  return (
    <div className="pagesContainer">
      <h3
        className={`page-container ${
          props.location.pathname === "/" ? "active" : ""
        }`}
      >
        <Link to="/" className="Link">
          Overview
        </Link>
      </h3>

      <h3
        className={`page-container ${
          props.location.pathname === "/challenges" ? "active" : ""
        }`}
      >
        <Link to="/challenges" className="Link">
          Challenges
        </Link>
      </h3>

      <h3
        className={`page-container ${
          props.location.pathname === "/shop" ? "active" : ""
        }`}
      >
        <Link to="/shop" className="Link">
          Shop
        </Link>
      </h3>
    </div>
  );
}

export default withRouter(Navigation);
