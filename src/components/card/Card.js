import React from "react";
import "./card.scss";
import Button from "../button/Button";

const Card = ({ data }) => {
  const showStatus = () => {
    return (
      <div
        className={`status ${data.status === "validated" ? "green" : "red"}`}
      >
        {data.status}
      </div>
    );
  };

  return (
    <div
      className={`card ${
        data.status !== "available"
          ? data.status === "validated"
            ? "border-top-green"
            : "border-top-red"
          : ""
      }`}
    >
      <h2 className="title">{data.title}</h2>
      <div className="xp-and-credits">
        <h3 className="xp">{data.xp} XP</h3>
        <h3 className="credits">{data.credits} CREDITS</h3>
      </div>
      <p className="description">{data.description}</p>
      <div className="bottom">
        {data.status !== "available" ? (
          <div
            className={`status ${
              data.status === "validated" ? "green" : "red"
            }`}
          >
            {data.status}
          </div>
        ) : (
          <div className="buttons-container">
            <Button type="btn secondary" value="Quit" />
            <Button type="btn primary flex-width-max" value="Completed" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
