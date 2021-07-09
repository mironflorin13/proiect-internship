import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import getUserInfo from "./mockFunctions/get-user-info.js";
import LeftHandPanel from "./components/left-hand-panel/left-hand-panel";
import Overview from "./pages/overview";
import Challenges from "./pages/challenges";
import Demo from "./pages/demo";
import Shop from "./pages/shop";
import "./app.scss";
import users from "./mockFunctions/users.js";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserInfo(0)
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Router>
        <LeftHandPanel userAvatar={users} userData={userData} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Overview userData={userData.challenges} />}
          />
          <Route path="/challenges" exact component={() => <Challenges />} />
          <Route path="/shop" exact component={() => <Shop />} />
          <Route path="/demo" exact component={() => <Demo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
