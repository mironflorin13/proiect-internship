import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import UserCard from "./UserCard";

import "./LeftHandPanel.scss";

function LeftHandPanel(props) {
  const [data, setData] = useState([]);

  const getUserInfo = (id) => {
    const userToShow = props.userAvatar.filter(
      (userChosen) => userChosen.id === id
    );

    return Promise.resolve(userToShow);
  };

  useEffect(() => {
    getUserInfo(0)
      .then((userData) => {
        setData(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  return (
    <>
      <div className="LeftHandPanel">
        {data &&
          data.map((item) => (
            <UserCard userName={item.name} userJob={item.jobTitle} userPhoto={item.image} key={item.id}/>
          ))}

        <p className="LeftHandPanel_admin"> Switch to Admin </p>
      </div>
    </>
  );
}

export default LeftHandPanel;
