import React from "react";
import { useLocation } from "react-router-dom";

import "./Menu.scss";
import Page from "./Page";

const pages = [
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

function Menu(props) {
  const location = useLocation();
  return (
    <div className="pagesContainer">
      {pages.map((item) => (
        <Page
          page={item.page}
          path={item.path}
          location={location.pathname}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Menu;
