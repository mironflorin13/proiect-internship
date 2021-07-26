import { getChallenges } from "../data/challenges";
import { getUsers } from "../data/users";

const getUserChallenges = (userId, statuses) => {
  const challenges = getChallenges();
  const users = getUsers();
  const result = {};

  const userChallengesFromUsers = users.find(
    user => user.id === userId
  ).challenges;

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
