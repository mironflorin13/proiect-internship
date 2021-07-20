import React from "react";

import UserRoutes from "./user-routes";
import AdminRoutes from "./admin-routes";
import UserAdminRoutes from "./user-admin-routes";

function Navigation({ roleType, userData, userId, hasMultipleRoles }) {
  if (hasMultipleRoles) {
    return roleType === "User" ? (
      <UserRoutes userData={userData} userId={userId} role={roleType} />
    ) : (
      <UserAdminRoutes userData={userData} userId={userId} role={roleType} />
    );
  } else {
    return roleType === "User" ? (
      <UserRoutes userData={userData} userId={userId} role={roleType} />
    ) : (
      <AdminRoutes userId={userId} role={roleType} />
    );
  }
}

export default Navigation;
