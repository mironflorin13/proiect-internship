import { getChallenges } from "../data/challenges";
import { CHALLENGE_STATUSES } from "../data/constants";
import { getUsers } from "../data/users";

const getChallengesToBeValidated = () => {
  const challenges = getChallenges();
  const users = getUsers();
  const result = [];

  users.forEach(user => {
    user.challenges.forEach(userChallenge => {
      if (userChallenge.status === CHALLENGE_STATUSES.TO_BE_VALIDATED) {
        result.push({
          user,
          challenge: challenges.find(
            challenge => challenge.id === userChallenge.id
          ),
        });
      }
    });
  });

  return Promise.resolve(result);
};

export default getChallengesToBeValidated;
