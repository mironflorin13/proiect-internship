import React from "react";
import ReactDOM from "react-dom";

import "./LeftHandPanel.scss";

function Shop(props) {
  return (
    <div
      className={["page-container", props.activateClass].join(" ")}
      onClick={props.onClickHandler}
    >
      <h3 className="page">Shop</h3>
    </div>
  );
}

export default Shop;
