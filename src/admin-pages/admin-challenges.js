import { useState, useEffect } from "react";

import getAllChallenges from "../mock-functions/get-all-challenges";
import addChallenge from "../mock-functions/add-challenge";
import deleteChallenge from "../mock-functions/delete-challenge";
import editChallenge from "../mock-functions/edit-challenge";
import "../components/left-hand-panel/left-hand-panel.scss";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import Card from "../components/card/card";
import AddNewModal from "../components/modal/add-new-modal";

const AdminChallenges = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [allChallenges, setAllChallenges] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState();

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

  useEffect(() => challengesRequest(() => getAllChallenges()), []);

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
                      closeModal={closeModalHandler}
                      addChallenge={addNewChallenge}
                      editChallenge={handleEdit}
                    />
                  </div>
                )}

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
