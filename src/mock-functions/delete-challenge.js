import { getChallenges, setChallenges } from "../data/challenges";
import { getUsers, setUsers } from "../data/users";

import getAllChallenges from "./get-all-challenges";

const deleteChallenge = id => {
  const challenges = getChallenges();
  const challengesAfterDeletion = challenges.filter(ch => ch.id !== id);

  const users = getUsers();
  const usersCopy = users.map(user => ({
    ...user,
    challenges: user.challenges.filter(challenge => challenge.id !== id),
  }));

  setUsers(usersCopy);
  setChallenges(challengesAfterDeletion);

  return getAllChallenges();
};

export default deleteChallenge;
