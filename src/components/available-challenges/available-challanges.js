import { useState, useEffect } from "react";

import getAvailableChallenges from "../../mock-functions/get-available-challenges";
import editChallengeStatus from "../../mock-functions/edit-challenge-status";
import editUserChallenges from "../../mock-functions/edit-user-challenges";
import ChallengesSection from "../challenges-section/challenges-section";
import Button from "../button/button";
import Card from "../card/card";

const AvailableChallenges = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [dataAvailable, setDataAvailable] = useState([]);

  const challengesRequest = () => {
    getAvailableChallenges()
      .then(challenges => {
        setDataAvailable(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };
  const enrollChallenge = itemId => {
    editUserChallenges(userId, itemId);
    editChallengeStatus(itemId, "in-progress");
    challengesRequest();
  };

  useEffect(challengesRequest, []);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="Available Challenges">
          {dataAvailable.length ? (
            dataAvailable.map(item => (
              <Card
                status={item.status}
                title={item.title}
                xp={item.xp}
                credits={item.credits}
                description={item.description}
                key={item.id}
              >
                <Button
                  type="btn primary flex-width-max"
                  value="Enroll"
                  handleOnClick={() => enrollChallenge(item.id)}
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
