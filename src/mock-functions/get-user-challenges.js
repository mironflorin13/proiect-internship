import { getChallenges } from "../data/challenges";
import { getUsers } from "../data/users";

const getUserChallenges = (userId, status) => {
  const challenges = getChallenges();
  const users = getUsers();

  const userChallengesFromUsers = users.find(
    item => item.id === userId
  ).challenges;

  if (status === "InProgressCompleted") {
    let userChallengesInProgress = challenges.filter(item =>
      userChallengesFromUsers.find(
        i => i.id === item.id && i.status === "in-progress"
      )
    );

    userChallengesInProgress = userChallengesInProgress.map(item => ({
      ...item,
      status: "in-progress",
    }));

    let userChallengesValidated = challenges.filter(item =>
      userChallengesFromUsers.find(
        i => i.id === item.id && i.status === "validated"
      )
    );
    userChallengesValidated = userChallengesValidated.map(item => ({
      ...item,
      status: "validated",
    }));

    let userChallengesDenied = challenges.filter(item =>
      userChallengesFromUsers.find(
        i => i.id === item.id && i.status === "denied"
      )
    );
    userChallengesDenied = userChallengesDenied.map(item => ({
      ...item,
      status: "denied",
    }));

    return Promise.resolve({
      inProgress: userChallengesInProgress,
      completed: [...userChallengesValidated, ...userChallengesDenied],
    });
  } else {
    return Promise.resolve(
      challenges.filter(item =>
        userChallengesFromUsers.find(
          i => i.id === item.id && i.status === status
        )
      )
    );
  }
};

export default getUserChallenges;
