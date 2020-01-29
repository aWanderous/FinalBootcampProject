import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AddTask from "./pages/AddTask";
import Tasks from "./pages/Tasks";
import Details from "./pages/Details";
import Helpers from "./pages/Helpers";
import Costs from "./pages/Costs";
import Guests from "./pages/Guests";
import Songs from "./pages/Songs";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/AddTask" component={AddTask} />
          <Route exact path="/Task" component={Tasks} />
          <Route exact path="/Task/:id" component={Details} />
          <Route exact path="/Helper" component={Helpers} />
          <Route exact path="/Cost" component={Costs} />
          <Route exact path="/Guest" component={Guests} />
          <Route exact path="/Song" component={Songs} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
