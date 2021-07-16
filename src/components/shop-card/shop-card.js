import React from "react";

import Button from "../button/button";
import "./shop-card.scss";

const ShopCard = ({ title, description }) => (
  <div className="shop-card">
    <div className="image"></div>
    <div className="bottom-section">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="buttons-container">
        <Button type="btn primary flex-width-max" value="Buy-50 Credits" />
      </div>
    </div>
  </div>
);
export default ShopCard;
