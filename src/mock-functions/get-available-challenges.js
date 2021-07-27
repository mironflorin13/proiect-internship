import { getChallenges } from "../data/challenges";
import { getUser } from "../data/users";

const getAvailableChallenges = userId => {
  const challenges = getChallenges();
  const userChallenges = getUser(userId).challenges;

  return Promise.resolve(
    challenges.filter(
      challenge =>
        !userChallenges.some(userChallenge => userChallenge.id === challenge.id)
    )
  );
};

export default getAvailableChallenges;
