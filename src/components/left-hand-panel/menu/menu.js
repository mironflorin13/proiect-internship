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
    path: "/",
  },
  {
    id: 2,
    page: "Validation",
    path: "/validation",
  },
  {
    id: 3,
    page: "Shop",
    path: "/shop",
  },
];

function Menu({ pagesToShow }) {
  const location = useLocation();
  return (
    <div className="pagesContainer">
      {pagesToShow === "User" &&
        userPages.map(item => (
          <Page
            page={item.page}
            path={item.path}
            location={location.pathname}
            key={item.id}
          />
        ))}
      {pagesToShow === "Admin" &&
        adminPages.map(item2 => (
          <Page
            page={item2.page}
            path={item2.path}
            location={location.pathname}
            key={item2.id}
          />
        ))}
    </div>
  );
}

export default Menu;
