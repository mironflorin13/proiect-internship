import React from "react";
import "./card.scss";
import Button from "../button/Button";

const Card = ({ data }) => {
  const completed =
    data.status === "validated" || data.status === "denied" ? data.status : "";

  return (
    <div className={`card ${completed}`}>
      <h2 className="title">{data.title}</h2>

      <div className="xp-and-credits">
        <h3 className="xp">{data.xp} XP</h3>
        <h3 className="credits">{data.credits} CREDITS</h3>
      </div>

      <p className="description">{data.description}</p>

      <div className="bottom">
        {data.status === "available" ? (
          <div className="buttons-container">
            <Button type="btn secondary" value="Quit" />
            <Button type="btn primary flex-width-max" value="Completed" />
          </div>
        ) : (
          <h3>{data.status}</h3>
        )}
      </div>
    </div>
  );
};

export default Card;
