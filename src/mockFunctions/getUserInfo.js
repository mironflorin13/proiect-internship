import users from "./users";
// import getUsers from "./getUsers";

const getUserInfo = (id) => {
  const userToShow = users.find((userChosen) => userChosen.id === id);

  return Promise.resolve(userToShow);
};

export default getUserInfo;
