import React from "react";
import { Route, Switch } from "react-router-dom";

import ProductDetails from "../user-pages/product-details";

function CommonRoutes() {
  return (
    <Switch>
      <Route
        path="/product/details/:id"
        exact
        component={props => <ProductDetails />}
      />
    </Switch>
  );
}

export default CommonRoutes;
