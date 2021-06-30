import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./UserCard.scss";

function UserCard({ name, jobTitle, image }) {
  return (
    <div className="UserCard">
      <img src={image} className="avatar" alt="user photo" />

      <div>
        <h3 className="userName">{name}</h3>
        <h4 className="jobTitle">{jobTitle}</h4>
      </div>
    </div>
  );
}

export default UserCard;
