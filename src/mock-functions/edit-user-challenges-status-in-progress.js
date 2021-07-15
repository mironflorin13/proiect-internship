import { getChallenges } from "../data/challenges";
import { setUsers, getUsers } from "../data/users";

const editUserChallengesStatusInProgress = (id, challengeId) => {
  const users = getUsers();
  const challenges = getChallenges();
  let userChallengesFromUsers = {};

  const usersCopy = users.map(item => {
    if (item.id === id) {
      const a = {
        ...item,
        challenges: [
          ...item.challenges,
          { id: challengeId, status: "in-progress" },
        ],
      };
      userChallengesFromUsers = a.challenges;
      return a;
    }
    return item;
  });

  setUsers(usersCopy);
  return Promise.resolve(
    challenges.filter(item =>
      userChallengesFromUsers.find(i => i.id === item.id) ? "" : true
    )
  );
};

export default editUserChallengesStatusInProgress;
