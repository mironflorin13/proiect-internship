import { getChallenges } from "../data/challenges";

const getAvailableChallenges = () => {
  const challenges = getChallenges();

  return Promise.resolve(
    challenges.filter(item => item.status === "available")
  );
};

export default getAvailableChallenges;
