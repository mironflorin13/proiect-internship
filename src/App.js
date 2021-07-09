import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import getUserInfo from "./mockFunctions/getUserInfo.js";
import LeftHandPanel from "./components/leftHandPanel/LeftHandPanel";
import Overview from "./pages/Overview";
import Challenges from "./pages/Challenges";
import Demo from "./pages/Demo";

import Shop from "./pages/Shop";
import "./app.scss";
import users from "./mockFunctions/users.js";

function App() {
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
