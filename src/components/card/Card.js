import React from "react";
import "./card.scss";
import Button from "../button/Button";

const Card = ({
  status,
  title,
  xp,
  credits,
  description,
  button1Message,
  button2Message,
}) => {
  const completed = status === "validated" || status === "denied" ? status : "";
  const hide = button1Message === "" ? "hide-btn" : "";

  return (
    <div className={`card ${completed}`}>
      <h2 className="title">{title}</h2>

      <div className="xp-and-credits">
        <h3 className="xp">{xp} XP</h3>
        <h3 className="credits">{credits} CREDITS</h3>
      </div>

      <p className="description">{description}</p>

      <div className="bottom">
        {completed === "" ? (
          <div className="buttons-container">
            <Button type={`btn secondary ${hide}`} value={button1Message} />
            <Button type="btn primary flex-width-max" value={button2Message} />
          </div>
        ) : (
          <h3>{status}</h3>
        )}
      </div>
    </div>
  );
};

export default Card;
