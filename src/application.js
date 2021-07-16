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
  const [role, setRole] = useState("User");
  const userId = 0;

  // const history = useHistory();

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
    setRole(role === "User" ? "Admin" : "User");
  }

  return (
    <div>
      <Router>
        <LeftHandPanel
          userAvatar={users}
          userData={userData}
          role={role}
          switchRole={switchRoleHandler}
        />

        <Navigation
          role={role}
          userData={userData}
          userId={userId}
        />
      </Router>
    </div>
  );
}

export default App;
