import { getChallenges, setChallenges } from "../data/challenges";

const editChallengeStatus = (id, status) => {
  const challenges = getChallenges();
  const challengesCopy = challenges.map(item => {
    if (item.id === id) {
      return { ...item, status };
    }
    return item;
  });

  setChallenges(challengesCopy);
  return challengesCopy;
};

export default editChallengeStatus;
