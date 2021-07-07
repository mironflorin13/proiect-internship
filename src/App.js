import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ReactDOM from "react-dom";
import LeftHandPanel from "./components/leftHandPanel/LeftHandPanel";
import Overview from "./pages/Overview";
import Challenges from "./pages/Challenges";
import Shop from "./pages/Shop";
import "./app.scss";
import users from "./mockFunctions/users.js";

function App() {
  return (
    <div>
      <Router>
        <LeftHandPanel userAvatar={users} />
        <Switch>
          <Route path="/" exact component={() => <Overview />} />
          <Route path="/challenges" exact component={() => <Challenges />} />
          <Route path="/shop" exact component={() => <Shop />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
