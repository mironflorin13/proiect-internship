import { useState, useEffect } from "react";

import ChallengesSection from "../challenges-section/challenges-section";
import Button from "../button/button";
import Card from "../card/card";
import getAvailableChallengesToAUser from "../../mock-functions/get-available-challenges-to-a-user";
import editUserChallengesStatusInProgress from "../../mock-functions/edit-user-challenges-status-in-progress";

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
    challengesRequest(() => editUserChallengesStatusInProgress(userId, itemId));
  };

  useEffect(() => {
    challengesRequest(() => getAvailableChallengesToAUser(userId));
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
