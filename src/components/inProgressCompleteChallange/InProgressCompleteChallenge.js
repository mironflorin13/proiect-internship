import { useState, useEffect } from "react";
import getChallenges from "../../mockFunctions/getChallenges";

const InProgressCompleteChallenge = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataCompleted, setDataCompleted] = useState([]);

  useEffect(() => {
    getChallenges()
      .then((challenges) => {
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

  return <div className="container">"Aici vor fi afisate cardurilessd"</div>;
};

export default InProgressCompleteChallenge;