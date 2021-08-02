import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import getUserInfo from "./mock-functions/get-user-info.js";
import LeftHandPanel from "./components/left-hand-panel/left-hand-panel";
import "./application.scss";
import users from "./data/users.js";
import Navigation from "./utils/navigation.js";

function App() {
  const userId = 0;
  const [userData, setUserData] = useState({});
  const [sectionDependingOnRole, setSectionDependingOnRole] = useState(
    users[userId].roles[0]
  );

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

  function prevSectionDependingOnRole() {
    return sectionDependingOnRole === "User" ? "Admin" : "User";
  }

  function switchRoleHandler() {
    setSectionDependingOnRole(prevSectionDependingOnRole());
  }

  const hasMultipleRoles = users[userId].roles.length > 1;

  return (
    <div>
      <Router>
        <LeftHandPanel
          {...userData}
          hasMultipleRoles={hasMultipleRoles}
          roleType={sectionDependingOnRole}
          switchRole={switchRoleHandler}
          userId={userId}
        />
        <div className="cards-overview-container">
          <Navigation
            hasMultipleRoles={hasMultipleRoles}
            roleType={sectionDependingOnRole}
            userData={userData}
            userId={userId}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
