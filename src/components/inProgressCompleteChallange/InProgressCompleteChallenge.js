import { useState, useEffect } from "react";
import getChallenges from "../../mockFunctions/getChallenges";
import DisplayChallenges from "../displayChallenges/DisplayChallenges";
import Button from "../button/Button";

const InProgressCompleteChallenge = () => {
  const [data, setData] = useState(false);
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
        <>
          <DisplayChallenges
            data={dataInProgress}
            title={"In progress Challenges"}
          >
            <Button type={`btn secondary`} value={"Quit"} />
            <Button type="btn primary flex-width-max" value={"Completed"} />
          </DisplayChallenges>

          <DisplayChallenges
            data={dataCompleted}
            title={"Completed Challenges"}
            style={"padding-bottom"}
          />
        </>
      )}
    </>
  );
};

export default InProgressCompleteChallenge;
