import { useState, useEffect } from "react";
import "./inProgressCompleteChallange.scss";
import Card from "./Card";
import getChallanges from "../functions/getChallanges";

const InProgressCompleteChanllenge = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataCompleted, setDataCompleted] = useState([]);

  useEffect(() => {
    getChallanges(1)
      .then((challange) => {
        setData(challange);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  useEffect(() => {
    setDataInProgress(data.filter((item) => item.status === "available"));
    setDataCompleted(data.filter((item) => item.status !== "available"));
  }, [data]);

  return (
    <div className="container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <></>}
    </div>
  );
};

export default InProgressCompleteChanllenge;
