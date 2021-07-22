import { getChallenges } from "../data/challenges";
import { getUsers } from "../data/users";

const getChallengesToBeValidated = () => {
  const challenges = getChallenges();
  const users = getUsers();
  const result = [];

  users.forEach(user => {
    user.challenges.forEach(userChallenge => {
      if (userChallenge.status === "to-be-validated") {
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
