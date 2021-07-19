import React from "react";
import { Switch, Route } from "react-router-dom";

import Validation from "../pages/overview";
import AdminChallenges from "../pages/challenges";
import Demo from "../pages/demo";
import Shop from "../pages/shop";
import NotFound from "../pages/not-found";

function AdminRoutes({ role, userId }) {
  return (
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

export default AdminRoutes;
