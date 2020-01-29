import React from "react";
import "./style.css";

// Delete entered fields
function RemoveBtn(props) {
  return (
    <span className="remove-btn" {...props} role="button" tabIndex="0">
      remove
    </span>
  );
}

export default RemoveBtn;
