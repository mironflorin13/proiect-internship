import React, { createContext, useState, useEffect } from "react";

import getUserInfo from "../mock-functions/get-user-info.js";

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [userData, setUserData] = useState({});
  const [roleType, setRoleType] = useState();
  const [update, setUpdate] = useState(0);
  const [hasMultipleRoles, setHasMultipleRoles] = useState();

  useEffect(() => {
    getUserInfo(userId)
      .then(data => {
        setUserData(data);
        setHasMultipleRoles(data.roles.length > 1);
        setRoleType(
          prevRole => (data.roles.length === 1 || !prevRole) && data.roles[0]
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, [update, userId]);

  const updateUserData = () => {
    setUpdate(prevUpdate => prevUpdate + 1);
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
