import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <a className="navbar-brand" id="title" href="/">
        I.DU
      </a>
      <a className="navbar-brand" href="/Task">
        Tasks
      </a>
      <a className="navbar-brand" href="/Helper">
        Helpers
      </a>
      <a className="navbar-brand" href="/Costs">
        Costs
      </a>
    </nav>
  );
}

export default Nav;
