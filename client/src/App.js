import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Saved from "./pages/Saved";
import Tasks from "./pages/Tasks";
import Helpers from "./pages/Helpers";
import Help from "./pages/Help";
import NoMatch from "./pages/NoMatch";
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
          <Route exact path="/Task" component={Saved} />
          <Route exact path="/Task/:id" component={Tasks} />
          <Route exact path="/Helper" component={Helpers} />
          <Route exact path="/Helper/:id" component={Help} />
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
