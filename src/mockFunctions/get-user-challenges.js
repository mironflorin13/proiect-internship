import { getChallenges } from "../data/challenges";

const getUserChallenges = userChallengesIds => {
  const challenges = getChallenges();
  const userChallenges = challenges.filter(item =>
    userChallengesIds.find(itemId => itemId === item.id)
  );

  return Promise.resolve(userChallenges);
};

export default getUserChallenges;
