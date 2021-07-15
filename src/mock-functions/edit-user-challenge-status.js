import { setUsers, getUsers } from "../data/users";

const editUserChallengeStatus = (itemId, userId, status) => {
  const users = getUsers();

  const usersCopy = users.map(item => {
    if (item.id === userId) {
      item.challenges.map(i => {
        if (i.id === itemId) {
          i.status = status;
        }
        return i;
      });
    }
    return item;
  });

  setUsers(usersCopy);
};

export default editUserChallengeStatus;
