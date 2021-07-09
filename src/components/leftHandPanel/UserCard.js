import React from "react";

import "./UserCard.scss";

function UserCard({ name, jobTitle, image }) {
  return (
    <div className="UserCard">
      <img src={image} className="avatar" alt="user" />

      <div>
        <h3 className="userName">{name}</h3>
        <h4 className="jobTitle">{jobTitle}</h4>
      </div>
    </div>
  );
}

export default UserCard;
