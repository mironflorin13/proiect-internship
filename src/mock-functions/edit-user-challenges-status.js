import { setUsers, getUsers } from "../data/users";

import getUserChallenges from "./get-user-challenges";

const editUserChallengesStatus = (userId, challengeId, newStatus, status) => {
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

  return getUserChallenges(userId, status);
};

export default editUserChallengesStatus;
