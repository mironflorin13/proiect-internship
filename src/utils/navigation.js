import React, { useContext } from "react";
import { Route, Switch } from "react-router";

import { Context } from "../context/context-provider";
import list from "../data/routes";

function Navigation() {
  const { userData } = useContext(Context);
  const { roles, id } = userData;

  if (roles) {
    const userList = list.filter(route =>
      roles.some(role => route.role.includes(role))
    );

    return (
      <Switch>
        {userList.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={() => <route.component userId={id} />}
          />
        ))}
      </Switch>
    );
  } else {
    return <p>You cannot access these routes</p>;
  }
}

export default Navigation;
