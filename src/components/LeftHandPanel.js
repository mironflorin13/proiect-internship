import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import UserCard from "./UserCard";
import Overview from "./Overview";
import Challenges from "./Challenges";
import Shop from "./Shop";

import getUserInfo from "../mockFunctions/getUserInfo.js";
import "./LeftHandPanel.scss";

function LeftHandPanel(props) {
  const [userData, setUserData] = useState({});
  const [activeOverviewClass, setActiveOverviewClass] = useState("active");
  const [activeChallengesClass, setActiveChallengesClass] = useState("");
  const [activeShopClass, setActiveShopClass] = useState("");

  useEffect(() => {
    getUserInfo(0)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const manageActiveClass = (id) => {
    switch (id) {
      case 1:
        setActiveOverviewClass("active");
        setActiveChallengesClass("");
        setActiveShopClass("");
        break;
      case 2:
        setActiveOverviewClass("");
        setActiveChallengesClass("active");
        setActiveShopClass("");
        break;
      default:
        setActiveOverviewClass("");
        setActiveChallengesClass("");
        setActiveShopClass("active");
        break;
    }
  };

  return (
    <>
      <div className="LeftHandPanel">
        <UserCard {...userData} />
        <div className="pagesContainer">
          <Overview
            onClickHandler={() => manageActiveClass(1)}
            activateClass={activeOverviewClass}
          />
          <Challenges
            onClickHandler={() => manageActiveClass(2)}
            activateClass={activeChallengesClass}
          />
          <Shop
            onClickHandler={() => manageActiveClass(3)}
            activateClass={activeShopClass}
          />
        </div>

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
