import React from "react";
import ReactDOM from "react-dom";
import LeftHandPanel from "./components/LeftHandPanel";
import InProgressCompleteChallenge from "./components/inProgressCompleteChallange/InProgressCompleteChallenge";
import "./app.scss";
import users from "./mockFunctions/users.js";

function App() {
  return (
    <div>
      <LeftHandPanel userAvatar={users} />
      <InProgressCompleteChallenge />
    </div>
  );
}

export default App;
