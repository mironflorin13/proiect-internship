import React from "react";
import { Switch, Route } from "react-router-dom";

import Overview from "../pages/overview";
import Challenges from "../pages/challenges";
import Demo from "../pages/demo";
import Shop from "../pages/shop";
import AdminChallenges from "../pages/admin-challenges";
import Validation from "../pages/validation";
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
      <Route path="*">
        {" "}
        <NotFound />{" "}
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route
        path="/challenges-admin"
        exact
        component={() => <AdminChallenges userId={userId} />}
      />
      <Route path="/validation" exact component={() => <Validation />} />
      <Route path="/shop-admin" exact component={() => <Shop role={role} />} />
      <Route path="/demo" exact component={() => <Demo />} />
      <Route path="*">
        {" "}
        <NotFound />{" "}
      </Route>
    </Switch>
  );
}

export default Navigation;
