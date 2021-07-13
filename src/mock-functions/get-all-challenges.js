import { getChallenges } from "../data/challenges";

const getAllChallenges = userChallengesIds => {
  const challenges = getChallenges();

  return Promise.resolve(challenges);
};

export default getAllChallenges;
