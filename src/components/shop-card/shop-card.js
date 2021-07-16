import React from "react";

import "./shop-card.scss";

const ShopCard = ({ title, description, children }) => (
  <div className="shop-card">
    <div className="image"></div>
    <div className="bottom-section">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="buttons-container">{children}</div>
    </div>
  </div>
);
export default ShopCard;
