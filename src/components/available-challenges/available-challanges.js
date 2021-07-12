import { useState, useEffect } from "react";

import getAvailableChallenges from "../../mock-functions/get-available-challenges";
import ChallengesSection from "../challenges-section/challenges-section";
import Button from "../button/button";
import Card from "../card/card";

const AvailableChallenges = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
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

  useEffect(challengesRequest, []);

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

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
                <Button type="btn primary flex-width-max" value="Enroll" />
              </Card>
            ))
          ) : (
            <h2 className="challenges-subtilte">No Challenges to display</h2>
          )}
        </ChallengesSection>
      </div>
    </>
  );
};

export default AvailableChallenges;
