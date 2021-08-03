import React from "react";
import { Route, Switch } from "react-router-dom";

import Validation from "../admin-pages/validation";
import AdminChallenges from "../admin-pages/admin-challenges";
import Demo from "../user-pages/demo";
import NotFound from "../user-pages/not-found";
import AdminShop from "../admin-pages/admin-shop";
import ProductDetails from "../user-pages/product-details";
import Overview from "../user-pages/overview";
import Challenges from "../user-pages/challenges";
import Shop from "../user-pages/shop";

function AllRoutes({ role, userId }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <Overview userId={userId} />} />
      <Route
        exact
        path="/challenges"
        component={() => <Challenges userId={userId} />}
      />
      <Route path="/shop" exact component={() => <Shop userId={userId} />} />

      <Route
        path="/admin/challenges"
        exact
        component={() => <AdminChallenges userId={userId} />}
      />
      <Route path="/admin/validation" exact component={() => <Validation />} />
      <Route path="/admin/shop" exact component={() => <AdminShop />} />

      <Route
        path="/product/details/:id"
        exact
        component={() => <ProductDetails />}
      />
      <Route path="/demo" exact component={() => <Demo />} />

      <Route path="*" component={() => <NotFound role={role} />} />
    </Switch>
  );
}

export default AllRoutes;
