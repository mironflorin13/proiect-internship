import { useState, useEffect, useContext } from "react";

import { Context } from "../context/context-provider";
import getChallengesToBeValidated from "../mock-functions/get-challenges-to-be-validated";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import editUserChallengesStatus from "../mock-functions/edit-user-challenges-status";
import { CHALLENGE_STATUSES, ROLES_STATUSES } from "../data/constants";

function AdminChallengesToBeValidated() {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [challengesToBeValidated, setChallengesToBeValidated] = useState([]);

  const { updateUserData, setRoleType } = useContext(Context);

  const challengesRequest = getChallenges => {
    getChallenges()
      .then(challenges => {
        setChallengesToBeValidated(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(() => {
    setRoleType(ROLES_STATUSES.ADMIN);
    challengesRequest(() => getChallengesToBeValidated());
  }, [setRoleType]);

  const denyChallenge = (userId, itemId) => () => {
    challengesRequest(() =>
      editUserChallengesStatus(itemId, userId, CHALLENGE_STATUSES.DENIED, [
        CHALLENGE_STATUSES.TO_BE_VALIDATED,
      ])
    );
  };

  const validatedChallenge = (userId, itemId) => () => {
    challengesRequest(() =>
      editUserChallengesStatus(itemId, userId, CHALLENGE_STATUSES.VALIDATED, [
        CHALLENGE_STATUSES.TO_BE_VALIDATED,
      ])
    );
    updateUserData();
  };

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="Challenges to be validated">
          {challengesToBeValidated.length ? (
            challengesToBeValidated.map(item => (
              <Card
                {...item.challenge}
                {...item.user}
                key={`${item.user.id}.${item.challenge.id}`}
              >
                <Button
                  type="btn secondary-r "
                  value="Deny"
                  handleOnClick={denyChallenge(item.challenge.id, item.user.id)}
                />
                <Button
                  type="btn primary-g flex-width-max"
                  value="Validate"
                  handleOnClick={validatedChallenge(
                    item.challenge.id,
                    item.user.id
                  )}
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
}

export default AdminChallengesToBeValidated;
