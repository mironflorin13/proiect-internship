import { getUsers, setUsers } from "../data/users";

import getUserChallenges from "./get-user-challenges";

const deleteChallengeFromAUser = (userId, challengeId, returnStatuses) => {
  const users = getUsers();
  const usersCopy = users.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        challenges: [
          ...user.challenges.filter(challange => challange.id !== challengeId),
        ],
      };
    }
    return user;
  });

  setUsers(usersCopy);

  return getUserChallenges(userId, returnStatuses);
};

export default deleteChallengeFromAUser;
