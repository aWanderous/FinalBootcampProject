import React from "react";
import "./style.css";
import Dollar from "./blue-dollar.png"
import { Link } from "react-router-dom";

function DollarIcon() {
  return (
    <Link to={"/Costs/"}>
      <img className="priced" src={Dollar} alt= "Priced"/>
    </Link>
  );
}

export default DollarIcon;
