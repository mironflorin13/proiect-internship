import { useState, useEffect } from "react";

import getAllChallenges from "../mock-functions/get-all-challenges";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import AddNewModal from "../components/modal/add-new-modal";

const AdminChallenges = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [availableChallenges, setAvailableChallenges] = useState([]);
  const [modalTitle, setModalTitle] = useState("Add challenge");
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState();

  const challengesRequest = getCh => {
    getCh()
      .then(challenges => {
        setAvailableChallenges(challenges);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(() => challengesRequest(() => getAllChallenges()), []);

  function addNewChallenge(title, xp, credits, description) {
    const challenges = availableChallenges;
    const challengesCopy = [
      ...challenges,
      { id: availableChallenges.length + 1, title, xp, credits, description },
    ];

    setAvailableChallenges(challengesCopy);
  }

  function editChallenge(id, title, xp, credits, description) {
    const editedChallenge = {
      id,
      title,
      xp,
      credits,
      description,
    };

    const challenges = availableChallenges;
    const foundIndex = challenges.findIndex(x => x.id === id);
    challenges[foundIndex] = editedChallenge;

    setAvailableChallenges(challenges);
  }

  function deleteChallenge(id) {
    const challenges = availableChallenges;
    const challengesAfterDeletion = challenges.filter(ch => ch.id !== id);

    setAvailableChallenges(challengesAfterDeletion);
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
                      <Button
                        type="btn secondary "
                        value="Delete"
                        handleOnClick={() => deleteChallenge(item.id)}
                      />
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
