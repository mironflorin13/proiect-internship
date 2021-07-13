import { useState, useEffect } from "react";

import getAllChallenges from "../mock-functions/get-all-challenges";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";

const AdminChallenges = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [dataAvailable, setDataAvailable] = useState([]);

  const challengesRequest = () => {
    getAllChallenges()
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

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="cardsOverviewContainer">
        <div className="challenges-container">
          <ChallengesSection title="Challenges">
            {dataAvailable.length ? (
              dataAvailable.map(item => (
                <>
                  <Card
                    title={item.title}
                    xp={item.xp}
                    credits={item.credits}
                    description={item.description}
                    key={item.id}
                  >
                    <Button type="btn secondary " value="Delete" />
                    <Button type="btn primary flex-width-max" value="Edit" />
                  </Card>
                  <Button type="btn primary fix" value="Add New" />
                </>
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

export default AdminChallenges;
