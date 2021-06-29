import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import userImage from "../img/user1.png";
import "./Avatar.scss";

function Avatar(props) {

  return (
    <div className="Avatar">
      {(<img
        src={props.userPhoto}
        style={{ width: "38px", height: "38px" }}
        alt="user photo"
      />)}
      {(
        <div>
          <h3>{props.userName}</h3>
          <h4>{props.userJob}</h4>
        </div>
      )}
    </div>
  );
}

export default Avatar;
