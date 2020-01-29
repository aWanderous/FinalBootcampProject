import React from "react";
import "./style.css";
import Assign from "./blue-person.png"
import { Link } from "react-router-dom";

function AssignIcon() {
  return (
    <Link to={"/Helper/"}>
      <img className="assigned" src={Assign} alt= "Assigned" />
    </Link>
  );
}

export default AssignIcon;
