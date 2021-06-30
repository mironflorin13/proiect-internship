import React from "react";
import ReactDOM from "react-dom";

import "./LeftHandPanel.scss";

function Overview(props) {
  return (
    <div
      className={["page-container", props.activateClass].join(" ")}
      onClick={props.onClickHandler}
    >
      <h3 className="page">Overview</h3>
    </div>
  );
}

export default Overview;
