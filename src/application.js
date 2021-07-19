import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import getUserInfo from "./mock-functions/get-user-info.js";
import LeftHandPanel from "./components/left-hand-panel/left-hand-panel";
import "./application.scss";
import users from "./data/users.js";
import Navigation from "./utils/navigation.js";

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
    console.log(role);
    setRole(role === "User" ? "Admin" : "User");
  }

  return (
    <div>
      {users[userId].role !== "UserAdmin" && (
        <Router>
          <LeftHandPanel
            userAvatar={users}
            userData={userData}
            role={users[userId].role}
          />

          <Navigation
            role={users[userId].role}
            userData={userData}
            userId={userId}
          />
        </Router>
      )}

      {users[userId].role === "UserAdmin" && (
        <Router>
          <LeftHandPanel
            userAvatar={users}
            userData={userData}
            initialRole={users[userId].role}
            role={role}
            switchRole={switchRoleHandler}
          />

          <Navigation
            initialRole={users[userId].role}
            role={role}
            userData={userData}
            userId={userId}
          />
        </Router>
      )}
    </div>
  );
}

export default App;
