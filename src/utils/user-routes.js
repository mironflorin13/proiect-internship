import React from "react";
import { Route, Switch } from "react-router-dom";

import Overview from "../user-pages/overview";
import Challenges from "../user-pages/challenges";
import Demo from "../user-pages/demo";
import Shop from "../user-pages/shop";
import NotFound from "../user-pages/not-found";

function UserRoutes({ role, userData, userId, showNotFoundRoute }) {
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
      {showNotFoundRoute && (
        <Route path="*" exact component={() => <NotFound role={role} />} />
      )}
    </Switch>
  );
}

export default UserRoutes;
