import React from "react";
import { Switch, Route } from "react-router-dom";

import Overview from "../pages/overview";
import Challenges from "../pages/challenges";
import Demo from "../pages/demo";
import Shop from "../pages/shop";
import NotFound from "../pages/not-found";

function UserRoutes({ role, userData, userId }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <Overview userData={userData.challenges} userId={userId} />
        )}
      />
      <Route
        exact
        path="/challenges"
        component={() => <Challenges userId={userId} />}
      />
      <Route path="/shop" exact component={() => <Shop role={role} />} />
      <Route path="/demo" exact component={() => <Demo />} />
      <Route path="*" exact component={() => <NotFound />} />
    </Switch>
  );
}

export default UserRoutes;
