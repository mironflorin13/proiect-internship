import React from "react";
import { Route, Switch } from "react-router";

import list from "../data/routes";

function Navigation({ roles, id }) {
  if (roles) {
    const userList = list.filter(route =>
      roles.some(role => route.role.includes(role))
    );

    return (
      <Switch>
        {userList.map(route => {
          const Component = route.component;
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={() => <Component userId={id} role={roles[0]} />}
            />
          );
        })}
      </Switch>
    );
  } else {
    return <p>You cannot access these routes</p>;
  }
}

export default Navigation;
