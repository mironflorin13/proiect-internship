import { CHALLENGES_STATUSES } from "../data/constants";
import { getUsers, setUsers } from "../data/users";

import getAvailableChallenges from "./get-available-challenges";

const addChallengeToAUser = (userId, challengeId) => {
  const users = getUsers();
  const usersCopy = users.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        challenges: [
          ...user.challenges,
          { id: challengeId, status: CHALLENGES_STATUSES.IN_PROGRESS },
        ],
      };
    }
    return user;
  });

  setUsers(usersCopy);
  return getAvailableChallenges(userId);
};

export default addChallengeToAUser;
