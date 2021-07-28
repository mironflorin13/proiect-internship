import { getChallenges, setChallenges } from "../data/challenges";

import getAllChallenges from "./get-all-challenges";

const addChallenge = (title, xp, credits, description) => {
  const challenges = getChallenges();
  let challengesCopy;
  if (challenges.length === 0) {
    challengesCopy = [
      {
        id: 1,
        title,
        xp,
        credits,
        description,
      },
    ];
  } else {
    challengesCopy = [
      ...challenges,
      {
        id: challenges[challenges.length - 1].id + 1,
        title,
        xp,
        credits,
        description,
      },
    ];
  }

  setChallenges(challengesCopy);
  return getAllChallenges();
};

export default addChallenge;
