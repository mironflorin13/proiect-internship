import React, { useState } from "react";

import Button from "../button/button";
import "./add-new-modal.scss";

function AddNewModal({ isModalOpened, closeModal }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredXP, setEnteredXP] = useState("");
  const [enteredCredits, setEnteredCredits] = useState();
  const [enteredDescription, setEnteredDescription] = useState();

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const xpChangeHandler = event => {
    setEnteredXP(event.target.value);
  };

  const creditsChangeHandler = event => {
    setEnteredCredits(event.target.value);
  };

  const descriptionChangeHandler = event => {
    setEnteredDescription(event.target.value);
  };

  return (
    isModalOpened && (
      <div className="popup">
        <div className="inner-popup">
          <div className="modal-title">Add a challenge</div>
          <form className="modal-form">
            <label htmlFor="title" className="modal-labels">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              className="modal-inputs"
            />
            <div className="inputs-group">
              <div className="input-label-pair">
                <label htmlFor="xp" className="modal-labels">
                  XP earned on competition
                </label>
                <input
                  id="xp"
                  type="number"
                  value={enteredXP}
                  onChange={xpChangeHandler}
                  className="modal-inputs"
                />
              </div>

              <div className="input-label-pair">
                <label htmlFor="credits" className="modal-labels">
                  Credits earned on competition
                </label>
                <input
                  id="credits"
                  type="number"
                  value={enteredCredits}
                  onChange={creditsChangeHandler}
                  className="modal-inputs"
                />
              </div>
            </div>
            <label htmlFor="description" className="modal-labels">
              Description
            </label>
            <input
              id="description"
              type="text"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
              className="modal-inputs"
            />
            <div className="modal-buttons">
              {/* <div> */}
              <Button
                type="btn secondary"
                value="Cancel"
                handleOnClick={closeModal}
              />
              <Button type="btn primary" value="Add" special={true} />
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default AddNewModal;
