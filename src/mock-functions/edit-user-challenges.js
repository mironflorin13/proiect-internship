import { setUsers, getUsers } from "./users";
import editChallengeStatus from "./edit-challenge-status";

const editUserChallenges = (id, challengeId) => {
  const users = getUsers();
  const usersCopy = users.map(item => {
    if (item.id === id) {
      return { ...item, challenges: [...item.challenges, challengeId] };
    }
    return item;
  });

  editChallengeStatus(challengeId, "in-progress");
  setUsers(usersCopy);
};

export default editUserChallenges;
