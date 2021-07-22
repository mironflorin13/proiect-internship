import React from "react";

import "./shop-card.scss";

const ShopCard = ({ title, description, children, imageURL }) => (
  <div className="shop-card">
    <img className="image" src={imageURL} />
    <div className="bottom-section">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="buttons-container">{children}</div>
    </div>
  </div>
);
export default ShopCard;
