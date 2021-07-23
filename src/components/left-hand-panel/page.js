import React from "react";
import { Link } from "react-router-dom";

function Page({location, page, path}) {
  return (
    <h3
      className={`page-container ${
        location === path ? "active" : ""
      }`}
    >
      <Link to={path} className="Link">
        {page}
      </Link>
    </h3>
  );
}

export default Page;
