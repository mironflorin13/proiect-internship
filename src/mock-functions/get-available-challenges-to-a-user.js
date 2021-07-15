import { getChallenges } from "../data/challenges";
import { getUsers } from "../data/users";

const getAvailableChallengesToAUser = userId => {
  const challenges = getChallenges();
  const users = getUsers();

  const userChallengesFromUsers = users.find(
    item => item.id === userId
  ).challenges;

  return Promise.resolve(
    challenges.filter(item =>
      userChallengesFromUsers.find(i => i.id === item.id) ? "" : true
    )
  );
};

export default getAvailableChallengesToAUser;
