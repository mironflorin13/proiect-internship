import { useState, useEffect } from "react";

import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import editUserChallengesStatus from "../mock-functions/edit-user-challenges-status";
import getUserChallenges from "../mock-functions/get-user-challenges";

const AvailableChallenges = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [availableChallenges, setAvailableChallenges] = useState([]);

  const challengesRequest = getChallenges => {
    getChallenges()
      .then(challenges => {
        setAvailableChallenges(challenges.available);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const enrollChallenge = itemId => () => {
    challengesRequest(() =>
      editUserChallengesStatus(userId, itemId, "in-progress", () =>
        getUserChallenges(userId, ["available"])
      )
    );
  };

  useEffect(() => {
    challengesRequest(() => getUserChallenges(userId, ["available"]));
  }, [userId]);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="cards-overview-container">
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
      </div>
    );
  }
};

export default AvailableChallenges;
