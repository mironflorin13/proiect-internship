import React from "react";
import { useLocation } from "react-router-dom";

import "./menu.scss";
import Page from "../page";

function Menu({ pagesToShow }) {
  const location = useLocation();
  return (
    <div className="pages-container">
      {pagesToShow.map(pageToShow => (
        <Page
          {...pageToShow}
          location={location.pathname}
          key={pageToShow.id}
        />
      ))}
    </div>
  );
}

export default Menu;
