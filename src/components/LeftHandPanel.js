import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import UserCard from "./UserCard";

import getUserInfo from "../mockFunctions/getUserInfo.js";
import "./LeftHandPanel.scss";

function LeftHandPanel(props) {
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
    <>
      <div className="LeftHandPanel">
        <UserCard {...userData} />

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
