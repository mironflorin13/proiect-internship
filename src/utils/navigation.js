import React from "react";

import UserRoutes from "./user-routes";
import AdminRoutes from "./admin-routes";
import AllRoutes from "./all-routes";

function Navigation({ roles, id }) {
  if (roles) {
    if (roles.includes("User") && roles.includes("Admin")) {
      return <AllRoutes userId={id} role="User" />;
    } else if (roles.includes("Admin")) {
      return <AdminRoutes userId={id} role="Admin" />;
    } else if (roles.includes("User")) {
      return <UserRoutes userId={id} role="User" />;
    } else {
      return (
        <div>
          <p>You cannot access these routes</p>
        </div>
      );
    }
  } else {
    return <p>You cannot access these routes</p>;
  }
}

export default Navigation;
