import React from "react";
import { Switch, Route } from "react-router-dom";

import Overview from "../pages/overview";
import Challenges from "../pages/challenges";
import Demo from "../pages/demo";
import Shop from "../pages/shop";
import AdminChallenges from "../admin-pages/admin-challenges";
import Validation from "../admin-pages/validation";
import NotFound from "../pages/not-found";

function Navigation({ role, userData, userId }) {
  return role === "User" ? (
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
      <Route path="*" component={() => <NotFound />} />
    </Switch>
  ) : (
    <Switch>
      <Route
        path="/admin/challenges"
        exact
        component={() => <AdminChallenges userId={userId} />}
      />
      <Route path="/admin/validation" exact component={() => <Validation />} />
      <Route path="/admin/shop" exact component={() => <Shop role={role} />} />
      <Route path="/admin/demo" exact component={() => <Demo />} />
      <Route path="*" component={() => <NotFound />} />
    </Switch>
  );
}

export default Navigation;
