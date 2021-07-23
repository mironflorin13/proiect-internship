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
  const [openModal, setOpenModal] = useState(false);

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

  function openPopUp() {
    setOpenModal(true);
    console.log(openModal);
  }

  function closeModalHandler() {
    setOpenModal(false);
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
                {openModal && (
                  <div className="overlay">
                    <AddNewModal
                      isModalOpened={openModal}
                      closeModal={closeModalHandler}
                    />
                  </div>
                )}

                {availableChallenges.length ? (
                  availableChallenges.map(item => (
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
                  ))
                ) : (
                  <h2 className="challenges-subtilte">
                    No Challenges to display
                  </h2>
                )}
                <Button
                  type="btn primary fix"
                  value="Add New"
                  handleOnClick={openPopUp}
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
