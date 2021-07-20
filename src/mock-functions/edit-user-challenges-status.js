import { setUsers, getUsers } from "../data/users";

const editUserChallengesStatus = (
  userId,
  challengeId,
  newStatus,
  returnFunction
) => {
  const users = getUsers();

  const usersCopy = users.map(user => {
    if (user.id === userId) {
      const challengesCopy = user.challenges.map(challenge => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      });
      return { ...user, challenges: challengesCopy };
    }
    return user;
  });

  setUsers(usersCopy);
<<<<<<< HEAD
=======

>>>>>>> init-#-1
  return returnFunction();
};

export default editUserChallengesStatus;
