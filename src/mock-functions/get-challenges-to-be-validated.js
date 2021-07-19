import { getChallenges } from "../data/challenges";
import { getUsers } from "../data/users";

const getChallengesToBeValidated = () => {
  const challenges = getChallenges();
  const users = getUsers();
  const result = [];

  users.map(item => {
    item.challenges.map(item1 => {
      if (item1.status === "to-be-validated") {
        result.push({
          user: { ...item },
          challenge: {
            ...challenges.find(item2 => item2.id === item1.id),
          },
        });
        return "";
      }
      return "";
    });
    return "";
  });
  return Promise.resolve(result);
};

export default getChallengesToBeValidated;
