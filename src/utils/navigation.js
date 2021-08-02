import React from "react";

import UserRoutes from "./user-routes";
import AdminRoutes from "./admin-routes";
import CommonRoutes from "./common-routes";

function Navigation({ roleType, userData, userId, hasMultipleRoles }) {
  function getRoutes(rolesList) {
    if (rolesList.includes("User") && roleType === "User") {
      return (
        <>
          <CommonRoutes />
          <UserRoutes
            userData={userData}
            userId={userId}
            role={roleType}
            showNotFoundRoute={true}
          />
        </>
      );
    } else if (rolesList.includes("Admin") && roleType === "Admin") {
      return (
        <>
          <CommonRoutes />
          {rolesList.length > 1 && (
            <UserRoutes
              userData={userData}
              userId={userId}
              role={roleType}
              showNotFoundRoute={false}
            />
          )}
          <AdminRoutes userId={userId} role={roleType} />
        </>
      );
    } else {
      return (
        <div>
          <p>You cannot access these routes</p>
        </div>
      );
    }
  }

  if (hasMultipleRoles) {
    return roleType === "User"
      ? getRoutes(["User"])
      : getRoutes(["User", "Admin"]);
  } else {
    return roleType === "User" ? getRoutes(["User"]) : getRoutes(["Admin"]);
  }
}

export default Navigation;
