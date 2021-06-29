import React from "react";
import ReactDOM from "react-dom";
import LeftHandPanel from "./components/LeftHandPanel";
import RightHandSide from "./components/RightHandSide";

import "./app.scss";

const users = [
  {
    id: 0,
    name: "Daniel Toma",
    jobTitle: "Software Developer",
    image:
      "https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
  },

  {
    id: 1,
    name: "Andrei Otea",
    jobTitle: "Software Developer",
    image: "user1.png",
  },
];

function App() {
  return (
    <div className="container">
      <LeftHandPanel userAvatar={users} />
      <RightHandSide />
    </div>
  );
}

export default App;
