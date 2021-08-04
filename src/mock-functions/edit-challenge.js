import { getChallenges, setChallenges } from "../data/challenges";

import getAllChallenges from "./get-all-challenges";

const editChallenge = (id, title, xp, credits, description) => {
  const challenges = getChallenges();
  const challengesCopy = challenges.map(challenge => {
    if (challenge.id === id) {
      return {
        id,
        title,
        xp,
        credits,
        description,
      };
    }
    return challenge;
  });

  setChallenges(challengesCopy);
  return getAllChallenges();
};

export default editChallenge;
