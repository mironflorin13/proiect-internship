import { useState, useEffect } from "react";

import getChallengesToBeValidated from "../mock-functions/get-challenges-to-be-validated";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import editUserChallengesStatus from "../mock-functions/edit-user-challenges-status";
import { CHALLENGES_STATUSES } from "../data/constants";

function AdminChallengesToBeValidated() {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [challengesToBeValidated, setChallengesToBeValidated] = useState([]);
  const [reload, setReload] = useState(1);

  const challengesRequest = () => {
    getChallengesToBeValidated()
      .then(challenges => {
        setChallengesToBeValidated(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const denyChallenge = (userId, itemId) => () => {
    editUserChallengesStatus(itemId, userId, CHALLENGES_STATUSES.DENIED);
    setReload(reload + 1);
  };

  const validatedChallenge = (userId, itemId) => () => {
    editUserChallengesStatus(itemId, userId, CHALLENGES_STATUSES.VALIDATED);
    setReload(reload + 1);
  };

  useEffect(() => challengesRequest(), [reload]);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="cards-overview-container">
        <div className="challenges-container">
          <ChallengesSection title="Challenges to be validated">
            {challengesToBeValidated.length ? (
              challengesToBeValidated.map(item => (
                <Card
                  title={item.challenge.title}
                  xp={item.challenge.xp}
                  credits={item.challenge.credits}
                  description={item.challenge.description}
                  key={`${item.user.id}.${item.challenge.id}`}
                  image={item.user.image}
                  name={item.user.name}
                >
                  <Button
                    type="btn secondary-r "
                    value="Deny"
                    handleOnClick={denyChallenge(
                      item.challenge.id,
                      item.user.id
                    )}
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
      </div>
    );
  }
}

export default AdminChallengesToBeValidated;
