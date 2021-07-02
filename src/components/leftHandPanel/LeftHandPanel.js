import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserCard from "./UserCard";
import getUserInfo from "../../mockFunctions/getUserInfo.js";
import "./LeftHandPanel.scss";

import Overview from "../../pages/Overview";
import Challenges from "../../pages/Challenges";
import Shop from "../../pages/Shop";
import Navigation from "./Navigation";

function LeftHandPanel(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserInfo(0)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="LeftHandPanel">
        <UserCard {...userData} />

        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Overview />} />
            <Route path="/challenges" exact component={() => <Challenges />} />
            <Route path="/shop" exact component={() => <Shop />} />
          </Switch>
        </Router>

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
