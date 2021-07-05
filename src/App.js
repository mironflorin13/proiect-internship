import React from "react";
import ReactDOM from "react-dom";
import LeftHandPanel from "./components/leftHandPanel/LeftHandPanel";
import "./app.scss";
import users from "./mockFunctions/users.js";

function App() {
  return (
    <div>
      <LeftHandPanel userAvatar={users} />
    </div>
  );
}

export default App;
