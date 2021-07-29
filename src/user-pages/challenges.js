import { useState, useEffect } from "react";

import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import getAvailableChallenges from "../mock-functions/get-available-challenges";
import addChallengeToAUser from "../mock-functions/add-challenge-to-a-user";

const AvailableChallenges = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [availableChallenges, setAvailableChallenges] = useState([]);

  const challengesRequest = getChallenges => {
    getChallenges()
      .then(challenges => {
        setAvailableChallenges(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const enrollChallenge = itemId => () => {
    challengesRequest(() => addChallengeToAUser(userId, itemId));
  };

  useEffect(() => {
    challengesRequest(() => getAvailableChallenges(userId));
  }, [userId]);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="Available Challenges">
          {availableChallenges.length ? (
            availableChallenges.map(item => (
              <Card {...item} key={item.id}>
                <Button
                  type="btn primary flex-width-max"
                  value="Enroll"
                  handleOnClick={enrollChallenge(item.id)}
                />
              </Card>
            ))
          ) : (
            <h2 className="challenges-subtilte">No Challenges to display</h2>
          )}
        </ChallengesSection>
      </div>
    );
  }
};

export default AvailableChallenges;
