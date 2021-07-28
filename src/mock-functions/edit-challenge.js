import { getChallenges, setChallenges } from "../data/challenges";

import getAllChallenges from "./get-all-challenges";

const editChallenge = (id, title, xp, credits, description) => {
  const challenges = getChallenges();
  const foundIndex = challenges.findIndex(x => x.id === id);
  challenges[foundIndex] = {
    id,
    title,
    xp,
    credits,
    description,
  };

  setChallenges(challenges);
  return getAllChallenges();
};

export default editChallenge;
