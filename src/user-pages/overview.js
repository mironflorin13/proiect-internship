import { useState, useEffect } from "react";

import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import ShopCard from "../components/shop-card/shop-card";
import editUserChallengesStatus from "../mock-functions/edit-user-challenges-status";
import getUserChallenges from "../mock-functions/get-user-challenges";
import getBoughtProducts from "../mock-functions/get-bought-products";
import { CHALLENGE_STATUSES } from "../data/constants";
import deleteChallengeFromAUser from "../mock-functions/delete-challange-from-a-user";

const InProgressCompleteChallenge = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataCompleted, setDataCompleted] = useState([]);
  const [products, setProducts] = useState([]);

  const challengesRequest = getChallenges => {
    getChallenges()
      .then(challenges => {
        setDataInProgress(challenges[CHALLENGE_STATUSES.IN_PROGRESS]);
        setDataCompleted([
          ...challenges[CHALLENGE_STATUSES.VALIDATED],
          ...challenges[CHALLENGE_STATUSES.DENIED],
        ]);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const productsRequest = userId => {
    getBoughtProducts(userId)
      .then(products => {
        setProducts(products);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  const quitChallenge = itemId => () => {
    challengesRequest(() =>
      deleteChallengeFromAUser(userId, itemId, [
        CHALLENGE_STATUSES.IN_PROGRESS,
        CHALLENGE_STATUSES.DENIED,
        CHALLENGE_STATUSES.VALIDATED,
      ])
    );
  };

  const completeChallenge = itemId => () => {
    challengesRequest(() =>
      editUserChallengesStatus(
        userId,
        itemId,
        CHALLENGE_STATUSES.TO_BE_VALIDATED,
        [
          CHALLENGE_STATUSES.IN_PROGRESS,
          CHALLENGE_STATUSES.DENIED,
          CHALLENGE_STATUSES.VALIDATED,
        ]
      )
    );
  };

  useEffect(() => {
    challengesRequest(() =>
      getUserChallenges(userId, [
        CHALLENGE_STATUSES.IN_PROGRESS,
        CHALLENGE_STATUSES.DENIED,
        CHALLENGE_STATUSES.VALIDATED,
      ])
    );
    productsRequest(userId);
  }, [userId]);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="cards-overview-container">
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

          <ChallengesSection title="Bought Products">
            {products.length ? (
              products.map(item => <ShopCard {...item} key={item.id} />)
            ) : (
              <h2 className="challenges-subtilte">No Products to Display</h2>
            )}
          </ChallengesSection>
        </div>
      </div>
    );
  }
};

export default InProgressCompleteChallenge;
