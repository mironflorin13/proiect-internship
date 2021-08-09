import { useState, useEffect, useContext } from "react";

import getAllChallenges from "../mock-functions/get-all-challenges";
import addChallenge from "../mock-functions/add-challenge";
import deleteChallenge from "../mock-functions/delete-challenge";
import editChallenge from "../mock-functions/edit-challenge";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import ChallengesForm from "../components/modal/challenges-form";
import Modal from "../components/modal/modal";
import { Context } from "../context/context-provider";
import { ROLES_STATUSES } from "../data/constants";

const AdminChallenges = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [allChallenges, setAllChallenges] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState();

  const { setRoleType } = useContext(Context);

  const challengesRequest = getChallenges => {
    getChallenges()
      .then(challenges => {
        setAllChallenges(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(() => {
    setRoleType(ROLES_STATUSES.ADMIN);
    challengesRequest(() => getAllChallenges());
  }, [setRoleType]);

  function addNewChallenge(title, xp, credits, description) {
    challengesRequest(() => addChallenge(title, xp, credits, description));
  }

  function handleEdit(id, title, xp, credits, description) {
    challengesRequest(() => editChallenge(id, title, xp, credits, description));
  }

  function handleDelete(id) {
    challengesRequest(() => deleteChallenge(id));
  }

  function closeModalHandler() {
    setIsVisible(false);
    setItem();
  }

  function handleOnEdit(item) {
    setIsVisible(true);
    setItem(item);
  }

  function handleOnAdd() {
    setIsVisible(true);
  }

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="Challenges">
          <>
            <Modal isVisible={isVisible}>
              <ChallengesForm
                isEditMode={Boolean(item)}
                {...item}
                closeModal={closeModalHandler}
                addChallenge={addNewChallenge}
                editChallenge={handleEdit}
              />
            </Modal>

            {allChallenges.length ? (
              allChallenges.map(item => (
                <Card
                  {...item}
                  key={item.id}
                  onClick={() => handleOnEdit(item)}
                >
                  <Button
                    type="btn secondary "
                    value="Delete"
                    handleOnClick={() => handleDelete(item.id)}
                  />
                  <Button
                    type="btn primary flex-width-max"
                    value="Edit"
                    handleOnClick={() => handleOnEdit(item)}
                  />
                </Card>
              ))
            ) : (
              <h2 className="challenges-subtilte">No Challenges to display</h2>
            )}
            <Button
              type="btn primary fix"
              value="Add New"
              handleOnClick={handleOnAdd}
            />
          </>
        </ChallengesSection>
      </div>
    );
  }
};

export default AdminChallenges;
