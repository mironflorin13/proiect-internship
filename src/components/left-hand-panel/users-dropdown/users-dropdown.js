import React, { useContext } from "react";

import { Context } from "../../../context/context-provider";
import "./users-dropdown.scss";

const UsersDropdown = () => {
  const { setUserId } = useContext(Context);

  return (
    <select
      onChange={e => setUserId(Number.parseInt(e.target.value))}
      className="users-dropdown"
    >
      <option value="0">User and Admin</option>
      <option value="1">Admin</option>
      <option value="2">User</option>
    </select>
  );
};

export default UsersDropdown;
