import React from "react";

import UserCard from "../left-hand-panel/user-card/user-card";
import "./card.scss";

const Card = ({
  status,
  title,
  xp,
  credits,
  description,
  children,
  image,
  name,
}) => {
  const completed = status === "validated" || status === "denied" ? status : "";
  const height = image ? "height" : "";

  return (
    <div className={`card ${completed} ${height}`}>
      {height && (
        <div className="user-card-container">
          <UserCard image={image} name={name} />
        </div>
      )}
      <h2 className="title">{title}</h2>

      <div className="xp-and-credits">
        <h3 className="xp">{xp} XP</h3>
        <h3 className="credits">{credits} CREDITS</h3>
      </div>

      <p className="description">{description}</p>

      <div className="bottom">
        {completed === "" ? (
          <div className="buttons-container">{children}</div>
        ) : (
          <h3>{status}</h3>
        )}
      </div>
    </div>
  );
};

export default Card;
