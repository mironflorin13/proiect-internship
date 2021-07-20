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
      {/* {users[userId].role !== "UserAdmin" && (
        <Router>
          <LeftHandPanel userData={userData} role={users[userId].role} />

          <Navigation
            role={users[userId].role}
            userData={userData}
            userId={userId}
          />
        </Router>
      )} */}

      {users[userId].roles.length > 1 ? (
        <Router>
          <LeftHandPanel
            userData={userData}
            initialRole={users[userId].roles[0]}
            role={role}
            switchRole={switchRoleHandler}
          />

          <Navigation
            initialRole={users[userId].roles[0]}
            role={role}
            userData={userData}
            userId={userId}
          />
        </Router>
      ) : (
        <Router>
          <LeftHandPanel userData={userData} role={users[userId].roles[0]} />
          <Navigation
            role={users[userId].roles[0]}
            userData={userData}
            userId={userId}
          />
        </Router>
      )}
    </div>
  );
}

export default App;
