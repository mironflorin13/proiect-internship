import React from "react";
import { Route, Switch } from "react-router-dom";

import Validation from "../admin-pages/validation";
import AdminChallenges from "../admin-pages/admin-challenges";
import Demo from "../user-pages/demo";
import NotFound from "../user-pages/not-found";
import AdminShop from "../admin-pages/admin-shop";

function AdminRoutes({ role, userId }) {
  return (
    <Switch>
      <Route
        path="/admin/challenges"
        exact
        component={() => <AdminChallenges userId={userId} />}
      />
      <Route path="/admin/validation" exact component={() => <Validation />} />
      <Route
        path="/admin/shop"
        exact
        component={() => <AdminShop role={role} />}
      />
      <Route path="/admin/demo" exact component={() => <Demo />} />
      <Route path="*" component={() => <NotFound role={role} />} />
    </Switch>
  );
}

export default AdminRoutes;
