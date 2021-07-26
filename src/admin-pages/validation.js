import { useState, useEffect } from "react";

import getChallengesToBeValidated from "../mock-functions/get-challenges-to-be-validated";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import editUserChallengesStatus from "../mock-functions/edit-user-challenges-status";

function AdminChallengesToBeValidated() {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [challengesToBeValidated, setChallengesToBeValidated] = useState([]);

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

  const denyChallenge = (userId, itemId) => () => {
    challengesRequest(() =>
      editUserChallengesStatus(
        itemId,
        userId,
        "denied",
        getChallengesToBeValidated
      )
    );
  };

  const validatedChallenge = (userId, itemId) => () => {
    challengesRequest(() =>
      editUserChallengesStatus(
        itemId,
        userId,
        "validated",
        getChallengesToBeValidated
      )
    );
  };
  useEffect(() => challengesRequest(getChallengesToBeValidated), []);

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
                  key={item.challenge.id + item.user.id}
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
