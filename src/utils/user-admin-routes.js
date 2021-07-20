import React from "react";
import { Switch, Route } from "react-router-dom";

import Validation from "../admin-pages/validation";
import AdminChallenges from "../admin-pages/admin-challenges";
import Demo from "../user-pages/demo";
import Shop from "../user-pages/shop";
import NotFound from "../user-pages/not-found";
import Overview from "../user-pages/overview";
import Challenges from "../user-pages/challenges";

function UserAdminRoutes({ role, userData, userId }) {
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
      <Route path="/shop" exact component={() => <Shop role={role} />} />s
      <Route path="*" component={() => <NotFound role={role} />} />
    </Switch>
  );
}

export default UserAdminRoutes;
