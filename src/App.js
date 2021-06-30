import React from "react";
import ReactDOM from "react-dom";
import LeftHandPanel from "./components/LeftHandPanel";

import "./app.scss";
import getUsers from "./mockFunctions/getUsers.js";

function App() {
  return (
    <div>
      <LeftHandPanel userAvatar={getUsers} />
    </div>
  );
}

export default App;
