import { getChallenges } from "../data/challenges";

import { getUsers } from "./users";

const getUserChallenges = userId => {
  const challenges = getChallenges();
  const users = getUsers();
  const userChallengesIds = users.find(item => item.id === userId).challenges;
  return Promise.resolve(
    challenges.filter(item =>
      userChallengesIds.find(itemId => itemId === item.id)
    )
  );
};

export default getUserChallenges;
