import React from "react";

import "../components/left-hand-panel/left-hand-panel.scss";

function Shop(props) {
  return (
    <div className="cards-overview-container">
      <div className="container">Aici vor fi produsele din shop {props.role}</div>
    </div>
  );
}

export default Shop;
