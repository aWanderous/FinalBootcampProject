import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Assign from "./blue-person.png"

// Link to helper page person maker
function AssignIcon() {
  return (
    <Link to={"/Helper/"}>
      <img className="assigned" src={Assign} alt= "Assigned" />
    </Link>
  );
}

export default AssignIcon;
