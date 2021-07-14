import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import getUserInfo from "./mock-functions/get-user-info.js";
import LeftHandPanel from "./components/left-hand-panel/left-hand-panel";
import Overview from "./pages/overview";
import Challenges from "./pages/challenges";
import Demo from "./pages/demo";
import Shop from "./pages/shop";
import Validation from "./pages/validation";
import "./application.scss";
import users from "./data/users.js";

function App() {
  const [userData, setUserData] = useState({});
  const [switchUserAdmin, setSwitchUserAdmin] = useState("User");
  const userId = 0;

  useEffect(() => {
    getUserInfo(userId)
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function switchRoleHandler() {
    switchUserAdmin === "User"
      ? setSwitchUserAdmin("Admin")
      : setSwitchUserAdmin("User");
  }

  return (
    <div>
      {switchUserAdmin === "User" && (
        <Router>
          <LeftHandPanel
            userAvatar={users}
            userData={userData}
            role={switchUserAdmin}
            switchRole={switchRoleHandler}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Overview userData={userData.challenges} userId={userId} />
              )}
            />
            <Route
              path="/challenges"
              exact
              component={() => <Challenges userId={userId} />}
            />
            <Route
              path="/shop"
              exact
              component={() => <Shop role={switchUserAdmin} />}
            />
            <Route path="/demo" exact component={() => <Demo />} />
          </Switch>
        </Router>
      )}
      {switchUserAdmin === "Admin" && (
        <Router>
          <LeftHandPanel
            userAvatar={users}
            userData={userData}
            role={switchUserAdmin}
            switchRole={switchRoleHandler}
          />
          <Switch>
            <Route
              path="/challenges-admin"
              exact
              component={() => <Challenges userId={userId} />}
            />
            <Route path="/validation" exact component={() => <Validation />} />
            <Route
              path="/shop-admin"
              exact
              component={() => <Shop role={switchUserAdmin} />}
            />
            <Route path="/demo" exact component={() => <Demo />} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
