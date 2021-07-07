import { useState, useEffect } from "react";
import getChallenges from "../../mockFunctions/getChallenges";
import "./inProgressCompleteChallenge.scss";
import Challenges from "../challenges/Challenges";
import Button from "../button/Button";
import Card from "../card/Card";

const InProgressCompleteChallenge = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataCompleted, setDataCompleted] = useState([]);

  useEffect(() => {
    getChallenges()
      .then((challenges) => {
        setData(challenges);
        setDataInProgress(
          challenges.filter((item) => item.status === "available")
        );
        setDataCompleted(
          challenges.filter((item) => item.status !== "available")
        );
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="challenges-container">
          <Challenges title="In progress Challenges">
            {dataInProgress.length ? (
              dataInProgress.map((item) => (
                <Card
                  status={item.status}
                  title={item.title}
                  xp={item.xp}
                  credits={item.credits}
                  description={item.description}
                  key={item.id}
                >
                  <Button type="btn secondary" value="Quit" id={item.id} />
                  <Button
                    type="btn primary flex-width-max"
                    value="Completed"
                    id={item.id}
                  />
                </Card>
              ))
            ) : (
              <h2 className="challenges-subtilte">No Challenges to display</h2>
            )}
          </Challenges>

          <Challenges title="Completed Challenges">
            {dataCompleted.length ? (
              dataCompleted.map((item) => (
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
          </Challenges>
        </div>
      )}
    </>
  );
};

export default InProgressCompleteChallenge;
