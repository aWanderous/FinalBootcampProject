import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Dollar from "./blue-dollar.png"

// Link to costs page $ maker
function DollarIcon() {
  return (
    <Link to={"/Cost/"}>
      <img className="priced" src={Dollar} alt= "Priced"/>
    </Link>
  );
}

export default DollarIcon;
