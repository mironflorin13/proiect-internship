import { useState, useEffect } from "react";

import getUserChallenges from "../../mock-functions/get-user-challenges";
import editChallengeStatus from "../../mock-functions/edit-challenge-status";
import "./in-progress-complete-challenge.scss";
import ChallengesSection from "../challenges-section/challenges-section";
import Button from "../button/button";
import Card from "../card/card";

const InProgressCompleteChallenge = ({ userChallengesIds }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataCompleted, setDataCompleted] = useState([]);

  const challengesRequest = () => {
    getUserChallenges(userChallengesIds)
      .then(challenges => {
        setDataInProgress(
          challenges.filter(item => item.status === "in-progress")
        );
        setDataCompleted(
          challenges.filter(
            item => item.status === "denied" || item.status === "validated"
          )
        );
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const quitChallenge = id => {
    editChallengeStatus(id, "denied");
    challengesRequest();
  };

  const completeChallenge = id => {
    editChallengeStatus(id, "validated");
    challengesRequest();
  };

  useEffect(challengesRequest, [userChallengesIds]);

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      <div className="challenges-container">
        <ChallengesSection title="In progress Challenges">
          {dataInProgress.length ? (
            dataInProgress.map(item => (
              <Card
                status={item.status}
                title={item.title}
                xp={item.xp}
                credits={item.credits}
                description={item.description}
                key={item.id}
              >
                <Button
                  type="btn secondary"
                  value="Quit"
                  handleOnClick={() => quitChallenge(item.id)}
                />
                <Button
                  type="btn primary flex-width-max"
                  handleOnClick={() => completeChallenge(item.id)}
                  value="Complete"
                />
              </Card>
            ))
          ) : (
            <h2 className="challenges-subtilte">No Challenges to display</h2>
          )}
        </ChallengesSection>

        <ChallengesSection title="Completed Challenges">
          {dataCompleted.length ? (
            dataCompleted.map(item => (
              <Card
                status={item.status}
                title={item.title}
                xp={item.xp}
                credits={item.credits}
                description={item.description}
                key={item.id}
              />
            ))
          ) : (
            <h2 className="challenges-subtilte">No Challenges to display</h2>
          )}
        </ChallengesSection>
      </div>
    </>
  );
};

export default InProgressCompleteChallenge;
