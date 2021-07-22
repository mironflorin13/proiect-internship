import { getChallenges } from "../data/challenges";
import { getUsers } from "../data/users";

const getUserChallenges = (userId, status) => {
  const challenges = getChallenges();
  const users = getUsers();

  const userChallengesFromUsers = users.find(
    user => user.id === userId
  ).challenges;

  if (status === "InProgressCompleted") {
    const userChallengesInProgress = challenges.filter(challenge =>
      userChallengesFromUsers.find(
        userChallenge =>
          userChallenge.id === challenge.id &&
          userChallenge.status === "in-progress"
      )
    );

    let userChallengesValidated = challenges.filter(challenge =>
      userChallengesFromUsers.find(
        userChallenge =>
          userChallenge.id === challenge.id &&
          userChallenge.status === "validated"
      )
    );

    userChallengesValidated = userChallengesValidated.map(
      challengeValidated => ({
        ...challengeValidated,
        status: "validated",
      })
    );

    let userChallengesDenied = challenges.filter(challenge =>
      userChallengesFromUsers.find(
        userChallenge =>
          userChallenge.id === challenge.id && userChallenge.status === "denied"
      )
    );

    userChallengesDenied = userChallengesDenied.map(challengeDenied => ({
      ...challengeDenied,
      status: "denied",
    }));

    return Promise.resolve({
      inProgress: userChallengesInProgress,
      completed: [...userChallengesValidated, ...userChallengesDenied],
    });
  } else {
    return Promise.resolve(
      challenges.filter(challenge =>
        userChallengesFromUsers.find(
          userChallenge =>
            userChallenge.id === challenge.id && userChallenge.status === status
        )
      )
    );
  }
};

export default getUserChallenges;
