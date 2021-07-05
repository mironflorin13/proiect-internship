import React from "react";
import { Link } from "react-router-dom";

function Page(props) {
  return (
    <h3
      className={`page-container ${
        props.location === props.path ? "active" : ""
      }`}
    >
      <Link to={props.path} className="Link">
        {props.page}
      </Link>
    </h3>
  );
}

export default Page;
