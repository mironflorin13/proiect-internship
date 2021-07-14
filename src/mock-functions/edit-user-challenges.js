import { setUsers, getUsers } from "../data/users";

import editChallengeStatus from "./edit-challenge-status";

const editUserChallenges = (id, challengeId) => {
  const users = getUsers();
  const usersCopy = users.map(item => {
    if (item.id === id) {
      return { ...item, challenges: [...item.challenges, challengeId] };
    }
    return item;
  });

  const challenges = editChallengeStatus(challengeId, "in-progress");
  setUsers(usersCopy);
  return Promise.resolve(
    challenges.filter(item => item.status === "available")
  );
};

export default editUserChallenges;