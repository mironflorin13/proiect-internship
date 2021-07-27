import { useState, useEffect } from "react";

import getAllChallenges from "../mock-functions/get-all-challenges";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import AddNewModal from "../components/modal/add-new-modal";
import { getChallenges } from "../data/challenges";

const AdminChallenges = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [availableChallenges, setAvailableChallenges] = useState([]);
  const [modalTitle, setModalTitle] = useState("Add challenge");
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState();

  const challengesRequest = () => {
    getAllChallenges()
      .then(challenges => {
        setAvailableChallenges(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(challengesRequest, []);

  function addNewChallenge(title, xp, credits, description) {
    const chellengeToInsert = {
      id: availableChallenges.length + 1,
      title,
      xp,
      credits,
      description,
    };

    setAvailableChallenges(prevChallenges => [
      ...prevChallenges,
      chellengeToInsert,
    ]);
  }

  function editChallenge(id, title, xp, credits, description) {
    const editedChallenge = {
      id,
      title,
      xp,
      credits,
      description,
    };

    const challenges = getChallenges().splice(id, 1, editedChallenge);
    console.log(challenges);

    setAvailableChallenges(challenges);
  }

  function closeModalHandler() {
    setIsVisible(false);
    setModalTitle("Add challenge");
    setItem();
  }

  function handleOnEdit(item) {
    setModalTitle("Edit challenge");
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
      <div>
        <div className="cards-overview-container">
          <div className="challenges-container">
            <ChallengesSection title="Challenges">
              <>
                {/* {isModalOpened && !isInEditMode && (
                  <div className="overlay">
                    <AddNewModal
                      closeModal={closeModalHandler}
                      addChallenge={addNewChallenge}
                      modalTitle={modalTitle}
                      isInEditMode={isInEditMode}
                    />
                  </div>
                )} */}

                {isVisible && (
                  <div className="overlay">
                    <AddNewModal
                      isEditMode={Boolean(item)}
                      item={item}
                      modalTitle={modalTitle}
                      closeModal={closeModalHandler}
                      addChallenge={addNewChallenge}
                      editChallenge={editChallenge}
                    />
                  </div>
                )}

                {availableChallenges.length ? (
                  availableChallenges.map(item => (
                    <Card
                      {...item}
                      key={item.id}
                      onClick={() => handleOnEdit(item)}
                    >
                      <Button type="btn secondary " value="Delete" />
                      <Button
                        type="btn primary flex-width-max"
                        value="Edit"
                        handleOnClick={() => handleOnEdit(item)}
                      />
                    </Card>
                  ))
                ) : (
                  <h2 className="challenges-subtilte">
                    No Challenges to display
                  </h2>
                )}
                <Button
                  type="btn primary fix"
                  value="Add New"
                  handleOnClick={handleOnAdd}
                />
              </>
            </ChallengesSection>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminChallenges;
