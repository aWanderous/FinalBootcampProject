import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        I.DU
      </a>
      <a className="navbar-brand" href="/Saved">
        Tasks
      </a>
      <a className="navbar-brand" href="/Helpers">
        Helpers
      </a>
      <a className="navbar-brand" href="/Costs">
        Costs
      </a>
    </nav>
  );
}

export default Nav;
