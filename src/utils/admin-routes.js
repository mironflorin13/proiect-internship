import React from "react";
import { Route, Switch } from "react-router-dom";

import Validation from "../admin-pages/validation";
import AdminChallenges from "../admin-pages/admin-challenges";
import Demo from "../user-pages/demo";
import Shop from "../user-pages/shop";
import NotFound from "../user-pages/not-found";

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
      <Route path="*" component={() => <NotFound role={role} />} />
    </Switch>
  );
}

export default AdminRoutes;
