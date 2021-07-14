import React from "react";
import { useLocation } from "react-router-dom";

import "./menu.scss";
import Page from "../page";

const userPages = [
  {
    id: 1,
    page: "Overview",
    path: "/",
  },
  {
    id: 2,
    page: "Challenges",
    path: "/challenges",
  },
  {
    id: 3,
    page: "Shop",
    path: "/shop",
  },
];

const adminPages = [
  {
    id: 1,
    page: "Challenges",
    path: "/challenges-admin",
  },
  {
    id: 2,
    page: "Validation",
    path: "/validation",
  },
  {
    id: 3,
    page: "Shop",
    path: "/shop-admin",
  },
];

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
