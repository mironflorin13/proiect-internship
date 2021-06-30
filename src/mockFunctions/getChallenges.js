import { challenges } from "../data/challenges";

const getChallenges = () => {
  return Promise.resolve(challenges);
};

export default getChallenges;
