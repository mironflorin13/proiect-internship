import { getChallenges } from "../data/challenges";
import { getUser } from "../data/users";

const getUserChallenges = (userId, statuses) => {
  const challenges = getChallenges();
  const userChallengesFromUsers = getUser(userId).challenges;
  const result = {};

  statuses.forEach(status => {
    result[status] = challenges
      .filter(challenge =>
        userChallengesFromUsers.some(
          userChallenge =>
            userChallenge.id === challenge.id && userChallenge.status === status
        )
      )
      .map(challenge => ({
        ...challenge,
        status,
      }));
  });

  return Promise.resolve(result);
};

export default getUserChallenges;
