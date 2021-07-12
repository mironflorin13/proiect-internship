import { setUsers, getUsers } from "./users";

const editUserChallenges = (id, challengeId) => {
  const users = getUsers();
  const usersCopy = users.map(item => {
    if (item.id === id) {
      return { ...item, challenges: [...item.challenges, challengeId] };
    }
    return item;
  });

  setUsers(usersCopy);
};

export default editUserChallenges;
