import React, { createContext, useState, useEffect } from "react";

import getUserInfo from "../mock-functions/get-user-info.js";

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [userData, setUserData] = useState({});
  const [roleType, setRoleType] = useState();
  const [hasMultipleRoles, setHasMultipleRoles] = useState();

  const getUserData = userId => {
    getUserInfo(userId)
      .then(data => {
        setUserData(data);
        setHasMultipleRoles(data.roles.length > 1);
        setRoleType(data.roles[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserData(userId);
  }, [userId]);

  const updateUserData = () => {
    getUserData(userId);
  };

  return (
    <Context.Provider
      value={{
        userData,
        roleType,
        hasMultipleRoles,
        updateUserData,
        setRoleType,
        setUserId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const Context = createContext();
export default ContextProvider;
