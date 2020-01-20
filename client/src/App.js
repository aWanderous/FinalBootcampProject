import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Helpers from "./pages/Helpers";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Costs from "./pages/Costs";
import Guests from "./pages/Guests";
import Songs from "./pages/Playlist";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Helper" component={Helpers} />
          <Route exact path="/Task" component={Saved} />
          <Route exact path="/Task/:id" component={Tasks} />
          <Route exact path="/Costs" component={Costs} />
          <Route exact path="/Guest" component={Guests} />
          <Route exact path="/Song" component={Songs} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
