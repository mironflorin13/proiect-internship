import React, { createContext, useState, useEffect } from "react";

const ContextProvider = ({ children, credits }) => {
  const [userCredit, setUserCredit] = useState();

  useEffect(() => {
    setUserCredit(credits);
  }, [credits]);

  const setCredit = newCredits => {
    setUserCredit(newCredits);
  };

  return (
    <Context.Provider value={{ userCredit, setCredit }}>
      {children}
    </Context.Provider>
  );
};
export const Context = createContext();
export default ContextProvider;
