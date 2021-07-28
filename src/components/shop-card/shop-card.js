import React from "react";
import { Link } from "react-router-dom";
import "./shop-card.scss";

const ShopCard = ({ id, title, description, children, imageURL }) => (
  <div className="shop-card">
    <Link to={`/product/details/${id}`}>
      <img className="image" src={imageURL} />
    </Link>
    <div className="bottom-section">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="buttons-container">{children}</div>
    </div>
  </div>
);
export default ShopCard;
