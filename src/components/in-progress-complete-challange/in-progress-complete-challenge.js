import { useState, useEffect } from "react";

import ChallengesSection from "../challenges-section/challenges-section";
import Button from "../button/button";
import Card from "../card/card";
import "./in-progress-complete-challenge.scss";
import editUserChallengesStatus from "../../mock-functions/edit-user-challenges-status";
import getUserChallenges from "../../mock-functions/get-user-challenges";

const InProgressCompleteChallenge = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataCompleted, setDataCompleted] = useState([]);

  const challengesRequest = getChallenges => {
    getChallenges()
      .then(challenges => {
        setDataInProgress(challenges.inProgress);
        setDataCompleted(challenges.completed);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const quitChallenge = itemId => () => {
    challengesRequest(() =>
      editUserChallengesStatus(userId, itemId, "available", () =>
        getUserChallenges(userId, "InProgressCompleted")
      )
    );
  };

  const completeChallenge = itemId => () => {
    challengesRequest(() =>
      editUserChallengesStatus(userId, itemId, "to-be-validated", () =>
        getUserChallenges(userId, "InProgressCompleted")
      )
    );
  };

  useEffect(() => {
    challengesRequest(() => getUserChallenges(userId, "InProgressCompleted"));
  }, [userId]);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="In progress Challenges">
          {dataInProgress.length ? (
            dataInProgress.map(item => (
              <Card {...item} key={item.id}>
                <Button
                  type="btn secondary"
                  value="Quit"
                  handleOnClick={quitChallenge(item.id)}
                />
                <Button
                  type="btn primary flex-width-max"
                  handleOnClick={completeChallenge(item.id)}
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
            dataCompleted.map(item => <Card {...item} key={item.id} />)
          ) : (
            <h2 className="challenges-subtilte">No Challenges to display</h2>
          )}
        </ChallengesSection>
      </div>
    );
  }
};

export default InProgressCompleteChallenge;
