import { CHALLENGE_STATUSES } from "../data/constants";
import { setUsers, getUsers } from "../data/users";

import getChallengesToBeValidated from "./get-challenges-to-be-validated";
import getUserChallenges from "./get-user-challenges";

const editUserChallengesStatus = (
  userId,
  challengeId,
  newStatus,
  returnStatuses
) => {
  const users = getUsers();

  const usersCopy = users.map(user => {
    if (user.id === userId) {
      const challengesCopy = user.challenges.map(challenge => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      });
      return { ...user, challenges: challengesCopy };
    }
    return user;
  });

  setUsers(usersCopy);

  if (returnStatuses[0] === CHALLENGE_STATUSES.TO_BE_VALIDATED) {
    return getChallengesToBeValidated();
  }
  return getUserChallenges(userId, returnStatuses);
};

export default editUserChallengesStatus;
