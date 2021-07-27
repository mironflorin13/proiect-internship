import { getChallenges } from "../data/challenges";

const getAllChallenges = () => {
  const challenges = getChallenges();

  return Promise.resolve(challenges);
};

export default getAllChallenges;
