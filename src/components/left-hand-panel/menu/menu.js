import React from "react";
import { useLocation } from "react-router-dom";

import "./menu.scss";
import Page from "../page";
import userPages from "../../../data/user-pages";
import adminPages from "../../../data/admin-pages";

function Menu({ pagesToShow }) {
  const location = useLocation();
  return (
    <div className="pagesContainer">
      {pagesToShow === "User" &&
        userPages.map(userPage => (
          <Page
            page={userPage.page}
            path={userPage.path}
            location={location.pathname}
            key={userPage.id}
          />
        ))}
      {pagesToShow === "Admin" &&
        adminPages.map(adminPage => (
          <Page
            page={adminPage.page}
            path={adminPage.path}
            location={location.pathname}
            key={adminPage.id}
          />
        ))}
    </div>
  );
}

export default Menu;
