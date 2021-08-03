import React from "react";
import { Route, Switch } from "react-router-dom";

import Overview from "../user-pages/overview";
import Challenges from "../user-pages/challenges";
import Demo from "../user-pages/demo";
import Shop from "../user-pages/shop";
import ProductDetails from "../user-pages/product-details";
import NotFound from "../user-pages/not-found";

function UserRoutes({ role, userId }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <Overview userId={userId} />} />
      <Route
        exact
        path="/challenges"
        component={() => <Challenges userId={userId} />}
      />
      <Route path="/shop" exact component={() => <Shop userId={userId} />} />
      <Route path="/demo" exact component={() => <Demo />} />

      <Route
        path="/product/details/:id"
        exact
        component={() => <ProductDetails />}
      />

      <Route path="*" component={() => <NotFound role={role} />} />
    </Switch>
  );
}

export default UserRoutes;
