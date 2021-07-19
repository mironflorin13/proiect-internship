import { setUsers, getUsers } from "../data/users";

const editUserChallengesStatus = (
  userId,
  challengeId,
  newStatus,
  returnFunction
) => {
  const users = getUsers();

  const usersCopy = users.map(item => {
    if (item.id === userId) {
      item.challenges.map(i => {
        if (i.id === challengeId) {
          i.status = newStatus;
        }
        return i;
      });
    }
    return item;
  });

  setUsers(usersCopy);
  return returnFunction();
};

export default editUserChallengesStatus;
