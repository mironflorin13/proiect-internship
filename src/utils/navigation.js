import React from "react";

import UserRoutes from "./user-routes";
import AdminRoutes from "./admin-routes";
import UserAdminRoutes from "./user-admin-routes";

function Navigation({ role, userData, userId, initialRole }) {
  if (initialRole === "UserAdmin") {
    return role === "User" ? (
      <UserRoutes userData={userData} userId={userId} role={role} />
    ) : (
      <UserAdminRoutes />
    );
  } else {
    return role === "User" ? (
      <UserRoutes userData={userData} userId={userId} role={role} />
    ) : (
      <AdminRoutes userId={userId} role={role} />
    );
  }
}

export default Navigation;
