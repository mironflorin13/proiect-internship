import { getChallenge } from "../data/challenges";
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
  const challengeCredits =
    newStatus === CHALLENGE_STATUSES.VALIDATED
      ? getChallenge(challengeId).credits
      : 0;
  const challengeXp =
    newStatus === CHALLENGE_STATUSES.VALIDATED
      ? getChallenge(challengeId).xp
      : 0;

  const usersCopy = users.map(user => {
    if (user.id === userId) {
      const challengesCopy = user.challenges.map(challenge => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      });

      return {
        ...user,
        challenges: challengesCopy,
        credits: user.credits + challengeCredits,
        xp: user.xp + challengeXp,
      };
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
