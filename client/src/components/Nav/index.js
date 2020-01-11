import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        I.DU
      </a>
      <a className="navbar-brand" href="/Tasks">
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