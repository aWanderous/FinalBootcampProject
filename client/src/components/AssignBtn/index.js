import React from "react";
import "./style.css";

function AssignBtn(props) {
  return (
    <span className="assign-btn" {...props} role="button" tabIndex="0">
      assign
    </span>
  );
}

export default AssignBtn;
