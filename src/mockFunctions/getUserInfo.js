import getUsers from "./getUsers";

const getUserInfo = (id) => {
  const userToShow = getUsers().find((userChosen) => userChosen.id === id);

  return Promise.resolve(userToShow);
};

export default getUserInfo;
