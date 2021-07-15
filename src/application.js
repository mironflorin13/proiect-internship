import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Route } from "react-router-dom";

import getUserInfo from "./mock-functions/get-user-info.js";
import LeftHandPanel from "./components/left-hand-panel/left-hand-panel";
// import Overview from "./pages/overview";
// import Challenges from "./pages/challenges";
// import Demo from "./pages/demo";
// import Shop from "./pages/shop";
// import AdminChallenges from "./pages/admin-challenges";
// import Validation from "./pages/validation";
import "./application.scss";
import users from "./data/users.js";
import Navigation from "./utils/navigation.js";
// import NotFound from "./pages/not-found";

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
      <Router>
        <LeftHandPanel
          userAvatar={users}
          userData={userData}
          role={switchUserAdmin}
          switchRole={switchRoleHandler}
        />
        {/* <Switch> */}
          <Navigation
            role={switchUserAdmin}
            userData={userData}
            userId={userId}
          />
          {/* <Route path="*" component={() => <NotFound />} /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
